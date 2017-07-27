<?php

namespace App\Entities;

use App\Exceptions\CommunityLinkAlreadySubmitted;
use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Link extends Model implements Transformable
{
    use TransformableTrait;

    protected $fillable = ['channel_id', 'name', 'url', 'user_id'];

    /**
     * A link has a creator.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function creator()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    /**
     * A link is assigned a channel.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function channel()
    {
        return $this->belongsTo(Channel::class, 'channel_id', 'id');
    }

    /**
     * A link may have many votes.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function votes()
    {
        return $this->hasMany(LinkVote::class, 'link_id');
    }

    /**
     * 获取分类下的数据
     * @param Builder $builder
     * @param Channel $channel
     * @return mixed
     */
    public function scopeForChannel($builder, $channel)
    {
        if ($channel->id) {
            return $builder->where('channel_id', $channel->id);
        }
        return $builder;
    }

    /**
     *
     * @param User $user
     * @return static
     */
    public static function from(User $user)
    {
        $link = new static;

        $link->user_id = $user->id;

        if ($user->isTrusted()) {
            $link->approve();
        }

        return $link;
    }

    /**
     * 投稿
     * @param $attributes
     * @return bool
     * @throws \Illuminate\Database\Eloquent\MassAssignmentException
     * @throws CommunityLinkAlreadySubmitted
     */
    public function contribute($attributes)
    {
        if ($existing = $this->hasAlreadyBeenExists($attributes['url'])) {
            $existing->touch();

            throw new CommunityLinkAlreadySubmitted;
        }

        return $this->fill($attributes)->save();
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
     * 检查数据是否存在
     * @param string $url
     * @return mixed
     */
    protected function hasAlreadyBeenExists($url)
    {
        return static::where('url', $url)->first();
    }
}
