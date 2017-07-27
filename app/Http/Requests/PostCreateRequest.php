<?php

namespace App\Http\Requests;

use App\Entities\Post;
use App\Repositories\PostRepository;
use Illuminate\Foundation\Http\FormRequest;

class PostCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'channel_id' => 'required|exists:channels,id',
            'name' => 'required|max:60',
            'keywords' => 'required|max:120',
            'description' => 'required|max:200',
            'body' => 'required',
        ];
    }

    public function messages()
    {
        if (config('app.locale') !== 'zh_cn') {
            return [];
        }
        return [
            'channel_id.required' => '请选择频道',
            'channel_id.exists' => '请选择正确的频道',
            'name.required' => '文章名称必须填写',
            'name.max' => '文章名称最大字符不超过60个字符',
            'keywords.required' => '关键字必须填写',
            'keywords.max' => '关键字不超过120个字符',
            'description.required' => '描述必须填写',
            'description.max' => '描述不超过200个字符',
            'body.required' => '内容不允许为空，必须填写',
        ];
    }
}
