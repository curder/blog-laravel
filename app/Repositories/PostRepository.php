<?php

namespace App\Repositories;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface PostRepository
 * @package namespace App\Repositories;
 * @method pushCriteria($app)
 * @method withTrashed()
 * @method onlyTrashed()
 * @method store($attributes)
 * @method prev($post)
 * @method next($post)
 */
interface PostRepository extends RepositoryInterface
{
    //
}
