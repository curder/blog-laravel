@extends('layouts.app')
@section('title','编辑频道')
@section('content')
    <div class="col-md-8">
        {!! Breadcrumbs::render('channels.edit',$channel) !!}
        @include('channels.list')
    </div>
    <div class="col-md-4">
        @include('channels.edit-channel')
    </div>
@endsection
