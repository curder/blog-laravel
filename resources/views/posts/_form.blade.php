<div class="form-group{{ $errors->has('channel_id') ? ' has-error' : '' }}">
    {!! Form::label('channel_id', '分类', ['class'=>'form-label']) !!}
    {!! Form::select('channel_id', $channels , null , ['class' => 'form-control']) !!}
    @if ($errors->has('channel_id'))
        <span class="help-block">{{ $errors->first('channel_id') }}</span>
    @endif
</div>
<div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
    {!! Form::label('name', '标题', ['class'=>'form-label']) !!}
    {!! Form::text('name',null,['class'=>'form-control']) !!}
    @if ($errors->has('name'))
        <span class="help-block">{{ $errors->first('name') }}</span>
    @endif
</div>
<div class="form-group{{ $errors->has('keywords') ? ' has-error' : '' }}">
    {!! Form::label('keywords', '关键字', ['class'=>'form-label']) !!}
    {!! Form::text('keywords',null,['class'=>'form-control']) !!}
    @if ($errors->has('keywords'))
        <span class="help-block">{{ $errors->first('keywords') }}</span>
    @endif
</div>
<div class="form-group{{ $errors->has('description') ? ' has-error' : '' }}">
    {!! Form::label('description', '描述', ['class'=>'form-label']) !!}
    {!! Form::textarea('description', null, ['class' => 'form-control','rows'=>2]) !!}
    @if ($errors->has('description'))
        <span class="help-block">{{ $errors->first('description') }}</span>
    @endif
</div>
<div class="form-group editor{{ $errors->has('body') ? ' has-error' : '' }}">
    {!! Form::label('body', '内容',['class'=>'control-label']) !!}
    {!! Form::textarea('body', null, ['class' => 'form-control','id'=>'markdownEditor']) !!}
    @if ($errors->has('body'))
        <span class="help-block">{{ $errors->first('body') }}</span>
    @endif
</div>
@section('script')
    @include('editor::head')
@endsection
