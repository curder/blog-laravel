<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\LinkRepository;
use App\Entities\Link;
use App\Validators\LinkValidator;

/**
 * Class LinkRepositoryEloquent
 * @package namespace App\Repositories;
 */
class LinkRepositoryEloquent extends BaseRepository implements LinkRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Link::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return LinkValidator::class;
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
     * @param $sortByPopular
     * @param $channel
     * @return mixed
     */
    public function get($sortByPopular, $channel)
    {
        $orderBy = $sortByPopular ? 'votes_count' : 'updated_at';

        return $this->model->with(['creator', 'channel'])
            ->withCount('votes')
            ->forChannel($channel)
            ->where('approved', 1)
            ->groupBy('links.id')
            ->orderBy($orderBy, 'desc')
            ->paginate(25);
    }
}
