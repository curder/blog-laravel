<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ChannelCreateRequest extends FormRequest
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
            'name' => 'required|max:30',
            'slug' => 'required|unique:channels|max:30',
            'color' => 'required',
            'keywords' => 'required|max:120',
            'description' => 'required|max:200',
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
            'name.required' => '频道名称必须填写',
            'name.max' => '频道名称长度不超过30个字符',
            'slug.required' => '频道别名必须填写',
            'slug.max' => '频道别名长度不超过30个字符',
            'slug.unique' => '不允许重复的别名',
            'color.required' => '颜色必须填写',
            'keywords.required' => '关键字必须填写',
            'keywords.max' => '关键字最大长度不大于120个字符',
            'description.required' => '描述必须填',
            'description.max' => '描述长度不能大于200个字符',
        ];
    }
}
