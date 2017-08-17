@extends('layouts.app')
@section('title','频道管理')
@section('content')
        <div class="col-md-8">
            {!! Breadcrumbs::render('channels.index') !!}
            @include('channels.list')
        </div>
        <div class="col-md-4">
            @include('channels.add-channel')
        </div>
@endsection
