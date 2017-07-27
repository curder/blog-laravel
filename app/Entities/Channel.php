<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Channel extends Model implements Transformable
{
    use TransformableTrait, SoftDeletes;

    protected $fillable = ['name', 'slug', 'color', 'keywords', 'description'];

    /**
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }
}
