<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class LinkVote extends Model
{
    protected $table = 'links_votes';

    protected $fillable = ['user_id', 'link_id'];

    public function toggle()
    {
        if ($this->exists) {
            return $this->delete();
        }
        $this->save();
    }
}
