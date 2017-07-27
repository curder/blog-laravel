<?php

namespace App\Http\Requests;

use App\Entities\Link;
use Illuminate\Foundation\Http\FormRequest;

class LinkCreateRequest extends FormRequest
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
            'url' => 'required|active_url|max:120', // |unique:community_links
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        if (config('app.locale') !== 'zh_cn') {
            return [];
        }
        return [
            'channel_id.required' => '必须选择',
            'channel_id.exists' => '所选的分类不存在',
            'name.required' => '名称必须填写',
            'name.max' => '分类名称最多60个字符',
            'url.required' => '地址必须填写',
            'url.active_url' => '地址不是有效地址',
            'url.max' => '地址长度最大为120个字符',
        ];
    }

    public function persist()
    {
        Link::from(
            auth()->user()
        )->contribute($this->all());
    }
}
