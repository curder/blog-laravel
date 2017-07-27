<?php

namespace App\Repositories;

use App\Entities\User;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\PostRepository;
use App\Entities\Post;
use App\Validators\PostValidator;

/**
 * Class PostRepositoryEloquent
 * @package namespace App\Repositories;
 */
class PostRepositoryEloquent extends BaseRepository implements PostRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Post::class;
    }

    /**
     * Specify Validator class name
     *
     * @return mixed
     */
    public function validator()
    {

        return PostValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     * @throws \Prettus\Repository\Exceptions\RepositoryException
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    /**
     * 查询正常的项目和被删除的管理员
     *
     * @return $this
     */
    public function withTrashed()
    {
        $this->model = $this->model->withTrashed();
        return $this;
    }

    /**
     * 查询被删除的管理员
     *
     * @return $this
     */
    public function onlyTrashed()
    {
        $this->model = $this->model->onlyTrashed();
        return $this;
    }

    /**
     * 获取当前文章分类下的上一篇文章
     *
     * @param $post
     * @return mixed
     */
    public function prev($post)
    {
        return $this->model->where('id', '<', $post->id)
            ->where('channel_id', '=', $post->channel_id)
            ->max('id');
    }

    /**
     * 获取当前文章分类下的下一篇文章
     *
     * @param $post
     * @return mixed
     */
    public function next($post)
    {
        return $this->model->where('id', '>', $post->id)
            ->where('channel_id', '=', $post->channel_id)
            ->min('id');
    }

    /**
     *
     * @param User $user
     * @return Post
     */
    public function form(User $user)
    {
        $post = new Post;

        $post->user_id = $user->id;

        if ($user->isAdmin()) {
            $post->approve();
        }

        return $post;
    }

    /**
     * @param $attributes
     * @return bool
     * @throws \Illuminate\Database\Eloquent\MassAssignmentException
     */
    public function store($attributes)
    {
        return $this->form(
            auth()->user()
        )->contribute($attributes);
    }
}
