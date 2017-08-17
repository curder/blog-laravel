@extends('layouts.app')
@section('title', trans('post.create'))
@section('content')
    <div class="col-md-10 col-sm-offset-1">
        {!! Breadcrumbs::render('posts.create') !!}
        <div class="panel panel-default">
            <div class="panel-heading">
                <h5>{{ trans('post.create') }}</h5>
            </div>
            <div class="panel-body">
                {!! Form::open(['route' => 'posts.store', 'method' => 'post']) !!}
                @include('posts._form')
                <div class="form-group">
                    <button class="btn btn-primary">{{ trans('global.create') }}</button>
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@endsection
