@extends('layouts.app')
@if($channel->exists)
    @section('title', $channel->name .' - ' .trans('link.all.title'))
@else
    @section('title', trans('link.all.title'))
@endif
@section('header')
    <div class="jumbotron">
        <div class="container">
            <h3>
                <a href="{{ route('links.index') }}">{{ trans('link.all.title') }}</a>

                @if($channel->exists)
                    <span>&mdash; {{ $channel->name }}</span>
                @endif
            </h3>
            <span>{{ trans('link.all.description') }}</span>
        </div>
    </div>
@endsection
@section('content')
    <div class="btn-group" role="group">
        <a href="{{ request()->url() }}"
           class="btn btn-default{{ request()->exists('popular') ? '' : ' active' }}">{{ trans('link.index.tab.recent') }}</a>
        <a href="?popular=1"
           class="btn btn-default{{ request()->exists('popular') ? ' active' : '' }}">{{ trans('link.index.tab.popular') }}</a>
    </div>
    <hr>
    <div class="col-md-8">
        @include('links._list')
    </div>
    <div class="col-md-4">
        {{--<h3>Contribute a link</h3>--}}
        <div class="panel panel-default">
            <div class="panel-body">
                @if(Route::currentRouteName() === 'links.index')
                    @include('links._create')
                @else
                    @include('links._edit')
                @endif
            </div>
        </div>
    </div>
@endsection
