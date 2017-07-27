@extends('layouts.app')
@section('header')
    <div class="jumbotron">
        <div class="container">
            <h3>
                <a href="{{ route('links.index') }}">所有链接</a>

                @if($channel->exists)
                    <span>&mdash; {{ $channel->name }}</span>
                @endif
            </h3>
            <span>常用到的链接</span>
        </div>
    </div>
@endsection
@section('content')
    <div class="btn-group" role="group">
        <a href="{{ request()->url() }}" class="btn btn-default{{ request()->exists('popular') ? '' : ' active' }}">Most
            Recent</a>
        <a href="?popular=1" class="btn btn-default{{ request()->exists('popular') ? ' active' : '' }}">Most Popular</a>
    </div>
    <hr>
    <div class="col-md-8">
        @include('links.list')
    </div>
    <div class="col-md-4">
        @include('links.add-link')
    </div>
@endsection
