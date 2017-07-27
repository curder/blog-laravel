@extends('layouts.app')

@section('content')
    <div class="col-md-8">
        @include('channels.list')
    </div>
    <div class="col-md-4">
        @include('channels.add-channel')
    </div>
@endsection
