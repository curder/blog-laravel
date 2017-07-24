<?php

namespace App\Http\Controllers;

use App\Entities\Channel;
use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\ChannelCreateRequest;
use App\Http\Requests\ChannelUpdateRequest;
use App\Repositories\ChannelRepository;
use App\Validators\ChannelValidator;
use Prettus\Repository\Criteria\RequestCriteria;


class ChannelsController extends Controller
{

    /**
     * @var ChannelRepository
     */
    protected $repository;

    /**
     * @var ChannelValidator
     */
    protected $validator;

    public function __construct(ChannelRepository $repository, ChannelValidator $validator)
    {
        $this->repository = $repository;
        $this->validator = $validator;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->repository->pushCriteria(app(RequestCriteria::class));
        $channels = $this->repository->withTrashed()->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $channels,
            ]);
        }

        flash('请在表单中新增分类')->info();

        return view('channels.index', compact('channels'));
    }

    public function create()
    {
        $this->repository->pushCriteria(app(RequestCriteria::class));
        $channels = $this->repository->withTrashed()->all();

        return view('channels.index', compact('channels'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ChannelCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(ChannelCreateRequest $request)
    {

        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $channel = $this->repository->create($request->all());

            $trans = trans('global.success.store');
            $response = [
                'message' => $trans,
                'data' => $channel->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            flash($trans)->success();

            return redirect()->back()->with('message', $trans);
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
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $channel = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $channel,
            ]);
        }

        return view('channels.show', compact('channel'));
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $slug
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {

        $channel = $this->repository->withTrashed()->findWhere(['slug' => $slug])->first();
        $this->repository->pushCriteria(app(RequestCriteria::class));
        $channels = $this->repository->withTrashed()->all();

        return view('channels.edit', compact('channels', 'channel'));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  ChannelUpdateRequest $request
     *
     * @return Response
     */
    public function update(ChannelUpdateRequest $request)
    {

        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $channel = $this->repository->update($request->all(), request()->get('id'));

            $trans = trans('global.success.update');
            $response = [
                'message' => $trans,
                'data' => $channel->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            flash($trans)->success();

            return redirect()->route('channels.edit', $channel)->with('message', $trans);
        } catch (ValidatorException $e) {

            if ($request->wantsJson()) {

                return response()->json([
                    'error' => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->route('channels.edit', $channel)->withErrors($e->getMessageBag())->withInput();
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
        $deleted = $this->repository->withTrashed()->find($id);
        if ($deleted->trashed()) { // 数据被软删除
            $trans = trans('global.success.restore');
            $deleted->restore();
            flash($trans)->warning();
        } else {
            $deleted->delete();
            $trans = trans('global.success.delete');
            flash($trans)->error();
        }
        if (request()->wantsJson()) {

            return response()->json([
                'message' => $trans,
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', $trans);
    }
}
