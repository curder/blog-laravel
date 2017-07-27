<?php

namespace App\Entities;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * @property bool approved
 */
class Post extends Model implements Transformable
{
    use TransformableTrait, SoftDeletes;

    protected $fillable = [
        'channel_id', 'name', 'slug', 'status', 'views', 'body', 'approved', 'keywords', 'description'
    ];



    /**
     * A post has a creator.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function creator()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    /**
     * A post is assigned a channel.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function channel()
    {
        return $this->belongsTo(Channel::class, 'channel_id', 'id');
    }


    /**
     * 审核用户提交的数据
     * @return $this
     */
    public function approve()
    {
        $this->approved = true;
        return $this;
    }

    /**
     * 投稿
     * @param $attributes
     * @return bool
     * @throws \Illuminate\Database\Eloquent\MassAssignmentException
     */
    public function contribute($attributes)
    {
        /**
         * if ($existing = $this->hasAlreadyBeenExists($attributes['link'])) {
         * $existing->touch();
         *
         * throw new PostAlreadySubmitted;
         * }
         */
        return $this->fill($attributes)->save();
    }
}
