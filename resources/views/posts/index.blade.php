@extends('layouts.app')
@section('title', $channel->name . '分类')
@section('header')
    <div class="jumbotron">
        <div class="container">
            <h3>
                <a href="{{ route('posts.index') }}">{{ trans('post.all.title') }}</a>

                @if($channel->exists)
                    <span>&mdash; {{ $channel->name }}</span>
                @endif
                @if(Auth::check())
                    <div class="pull-right">
                        <a href="{{ route('posts.create') }}" class="btn btn-success btn-lg"><i
                                    class="glyphicon glyphicon-pencil"></i> {{ trans('post.create') }}</a>
                    </div>
                @endif
            </h3>
            <span>{{ trans('post.all.description') }}</span>

        </div>
    </div>
@endsection
@section('content')
    {!! Breadcrumbs::render('posts.index',$channel) !!}
    <div class="col-md-12">
        @include('posts._list')
    </div>
@endsection
