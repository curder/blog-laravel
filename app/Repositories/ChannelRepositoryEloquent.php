<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\ChannelRepository;
use App\Entities\Channel;
use App\Validators\ChannelValidator;

/**
 * Class ChannelRepositoryEloquent
 * @package namespace App\Repositories;
 */
class ChannelRepositoryEloquent extends BaseRepository implements ChannelRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Channel::class;
    }

    /**
     * Specify Validator class name
     *
     * @return mixed
     */
    public function validator()
    {

        return ChannelValidator::class;
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
     * 查询正常和被删除的分类
     *
     * @return $this
     */
    public function withTrashed()
    {
        $this->model = $this->model->withTrashed();
        return $this;
    }

    /**
     * 查询被删除的分类
     *
     * @return $this
     */
    public function onlyTrashed()
    {
        $this->model = $this->model->onlyTrashed();
        return $this;
    }


}
