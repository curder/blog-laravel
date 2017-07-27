<?php

namespace App\Presenters;

use App\Transformers\PostTransformer;
use EndaEditor;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class PostPresenter
 *
 * @package namespace App\Presenters;
 */
class PostPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new PostTransformer();
    }

    /**
     * 判断按钮是删除或恢复
     *
     * @param $post
     * @return string
     */
    public function showDeleteOrRestoreBtn($post)
    {

        $class = 'danger';
        $trans = trans('global.delete');
        if ($post->trashed()) {
            $class = 'info';
            $trans = trans('global.restore');
        }
        return "<button type='submit' class='btn btn-xs btn-{$class}'>{$trans}</button>";
    }

    /**
     * @param $post
     * @return mixed
     */
    public function body2Html($post)
    {
        return EndaEditor::MarkDecode($post->body);
    }

}
