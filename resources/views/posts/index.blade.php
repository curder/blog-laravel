@extends('layouts.app')
@section('header')
    <div class="jumbotron">
        <div class="container">
            <h3>
                <a href="{{ route('posts.index') }}">{{ trans('post.all.title') }}</a>

                @if($channel->exists)
                    <span>&mdash; {{ $channel->name }}</span>
                @endif
            </h3>
            <span>{{ trans('post.all.description') }}</span>
        </div>
    </div>
@endsection
@section('content')
    <div class="col-md-12">
        @include('posts.list')
    </div>
@endsection
