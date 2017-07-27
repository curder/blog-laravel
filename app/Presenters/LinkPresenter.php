<?php

namespace App\Presenters;

use App\Transformers\LinkTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class LinkPresenter
 *
 * @package namespace App\Presenters;
 */
class LinkPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new LinkTransformer();
    }
}
