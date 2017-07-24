@extends('layouts.app')

@section('content')
    <div class="col-md-8 col-sm-offset-2">

        <div class="panel panel-default">
            <div class="panel-heading">
                <h5>新增文章</h5>
            </div>
            <div class="panel-body">
                {!! Form::open(['route' => 'posts.store', 'method' => 'post']) !!}
                <div class="form-group">
                    {!! Form::label('channel_id', '分类', ['class'=>'form-label']) !!}
                    {!! Form::select('channel_id', $channels , null , ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('name', '标题', ['class'=>'form-label']) !!}
                    {!! Form::text('name',null,['class'=>'form-control']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('body', '内容',['class'=>'control-label']) !!}
                    {!! Form::textarea('body', null, ['class' => 'form-control']) !!}
                </div>
                <div class="form-group">
                    <button class="btn btn-primary">Submit</button>
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@endsection
