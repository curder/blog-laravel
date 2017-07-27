@extends('layouts.app')
@section('content')
    <div class="col-md-8">
        @include('posts.list')
    </div>
    <div class="col-md-4">
{{--        @include('posts.add-post')--}}
    </div>
@endsection
