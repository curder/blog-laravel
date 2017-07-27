<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadsController extends Controller
{
    /**
     * 文件上传
     * @return string
     */
    public function store()
    {
        $data = \EndaEditor::uploadImgFile('uploads/images');

        return json_encode($data);
    }
}
