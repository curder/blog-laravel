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
            'keywords' => 'required',
            'description' => 'required',
            'body' => 'required',
        ];
    }
}
