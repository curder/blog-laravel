<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Entities\Channel;

/**
 * Class ChannelTransformer
 * @package namespace App\Transformers;
 */
class ChannelTransformer extends TransformerAbstract
{

    /**
     * Transform the \Channel entity
     * @param \Channel $model
     *
     * @return array
     */
    public function transform(Channel $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
