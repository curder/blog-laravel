<?php

namespace App\Presenters;

use App\Transformers\ChannelTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class ChannelPresenter
 *
 * @package namespace App\Presenters;
 */
class ChannelPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new ChannelTransformer();
    }

    /**
     * 判断按钮是删除或恢复
     *
     * @param $channel
     * @return string
     */
    public function showDeleteOrRestoreBtn($channel)
    {
        $class = 'danger';
        $trans = trans('global.delete');
        if ($channel->trashed()) {
            $class = 'info';
            $trans = trans('global.restore');
        }
        return "<button type='submit' class='btn btn-xs btn-{$class}'>{$trans}</button>";
    }

}
