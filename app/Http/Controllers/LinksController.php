<?php

namespace App\Http\Controllers;

use App\Entities\Channel;
use App\Exceptions\CommunityLinkAlreadySubmitted;
use App\Repositories\ChannelRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\LinkCreateRequest;
use App\Http\Requests\LinkUpdateRequest;
use App\Repositories\LinkRepository;
use App\Validators\LinkValidator;
use Prettus\Repository\Criteria\RequestCriteria;


class LinksController extends Controller
{

    /**
     * @var LinkRepository
     */
    protected $repository;
    /**
     * @var ChannelRepository
     */
    protected $channelRepository;

    /**
     * @var LinkValidator
     */
    protected $validator;

    public function __construct(LinkRepository $repository, ChannelRepository $channelRepository, LinkValidator $validator)
    {
        $this->repository = $repository;
        $this->channelRepository = $channelRepository;
        $this->validator = $validator;
    }


    /**
     * Display a listing of the resource.
     *
     * @param Channel|null $channel
     * @return \Illuminate\Http\Response
     */
    public function index(Channel $channel = null)
    {
        $this->repository->pushCriteria(app(RequestCriteria::class));

        $links = $this->repository->get(request()->exists('popular'), $channel);

        $channels = $this->channelRepository->orderBy('name', 'asc')->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $links,
            ]);
        }

        return view('links.index', compact('links', 'channels', 'channel'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param LinkCreateRequest $form
     * @return \Illuminate\Http\Response
     * @internal param LinkCreateRequest $request
     *
     */
    public function store(LinkCreateRequest $form)
    {

        try {
            $this->validator->with($form->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
            $form->persist();
            if (auth()->user()->isTrusted()) {
                flash('Thank you for the contribute!', 'success');
            } else {
                flash()->overlay('This contribute will be approved shortly.', 'Thanks!');
            }

            return back();

        } catch (CommunityLinkAlreadySubmitted $e) {
            flash()->overlay(
                "We'll instead bump the timestamps and bring that link back to the top. Thanks!",
                'That Link Has Already Been Submitted'
            );
        } catch (ValidatorException $e) {
            if ($form->wantsJson()) {
                return response()->json([
                    'error' => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
        }
        return back();

    }


    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $link = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $link,
            ]);
        }

        return view('links.show', compact('link'));
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $link = $this->repository->find($id);

        return view('links.edit', compact('link'));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  LinkUpdateRequest $request
     * @param  string $id
     *
     * @return Response
     */
    public function update(LinkUpdateRequest $request, $id)
    {

        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $link = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Link updated.',
                'data' => $link->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {

            if ($request->wantsJson()) {

                return response()->json([
                    'error' => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = $this->repository->delete($id);

        if (request()->wantsJson()) {

            return response()->json([
                'message' => 'Link deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Link deleted.');
    }
}
