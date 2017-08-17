@extends('layouts.app')

@section('content')
    <div class="col-md-10 col-sm-offset-1">

        <div class="panel panel-default">
            <div class="panel-heading">
                <h5>{{ trans('global.create') }}</h5>
            </div>
            <div class="panel-body">
                {!! Form::model($post, ['route' => ['posts.update', $post], 'method' => 'patch']) !!}
                @include('posts._form')
                <div class="form-group">
                    {!! Form::hidden('id',$post->id) !!}
                    <button class="btn btn-primary">{{ trans('global.update') }}</button>
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@endsection
