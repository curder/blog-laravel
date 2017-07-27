<?php

namespace App\Http\Controllers;

use App\Entities\Channel;
use App\Repositories\ChannelRepository;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\PostCreateRequest;
use App\Http\Requests\PostUpdateRequest;
use App\Repositories\PostRepository;
use App\Validators\PostValidator;
use Prettus\Repository\Criteria\RequestCriteria;

class PostsController extends Controller
{

    /**
     * @var PostRepository
     */
    protected $repository;

    /**
     * @var ChannelRepository $channelRepository
     */
    protected $channelRepository;

    /**
     * @var PostValidator
     */
    protected $validator;


    public function __construct(PostRepository $repository, ChannelRepository $channelRepository, PostValidator $validator)
    {
        $this->repository = $repository;
        $this->validator = $validator;
        $this->channelRepository = $channelRepository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->repository->pushCriteria(app(RequestCriteria::class));
        $posts = $this->repository->withTrashed()->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $posts,
            ]);
        }

        return view('posts.index', compact('posts'));
    }

    public function create()
    {
        $channels = $this->channelRepository->pluck('name', 'id');

        return view('posts.create', compact('channels'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PostCreateRequest $request
     * @return \Illuminate\Http\Response
     * @internal param PostCreateRequest $request
     *
     */
    public function store(PostCreateRequest $request)
    {

        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $post = $this->repository->store($request->all());

            if (auth()->user()->isAdmin()) {
                flash('Thank you for the contribute!', 'success');
            } else {
                flash()->overlay('This contribute will be approved shortly.', 'Thanks!');
            }

            $trans = trans('global.success.store');
            $response = [
                'message' => $trans,
                'data' => $post,
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->route('posts.index')->with('message', $trans);
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
        $post = $this->repository->withTrashed()->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $post,
            ]);
        }

        $prev = $this->repository->prev($post); // 获取当前文章分类下的上一篇文章

        $next = $this->repository->next($post); // 获取当前文章分类下的下一篇文章

        return view('posts.show', compact('post', 'prev', 'next'));
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

        $post = $this->repository->find($id);
        $channels = $this->channelRepository->pluck('name', 'id');
        return view('posts.edit', compact('post', 'channels'));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  PostUpdateRequest $request
     * @param  string $id
     *
     * @return Response
     */
    public function update(PostUpdateRequest $request, $id)
    {

        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $post = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Post updated.',
                'data' => $post->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->route('posts.show', $post)->with('message', $response['message']);
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
