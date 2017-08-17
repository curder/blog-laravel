<div class="form-group{{ $errors->has('channel_id') ? ' has-error' : '' }}">
    {!! Form::label('channel_id', trans('link.index.form.channel_id.title')) !!}
    {!! Form::select('channel_id', $channels , old('channel_id') , ['class' => 'form-control','placeholder'=>trans('link.index.form.channel_id.placeholder')]) !!}
    @if ($errors->has('channel_id'))
        <span class="help-block">{{ $errors->first('channel_id') }}</span>
    @endif
</div>

<div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
    {!! Form::label('name', trans('link.index.form.name.title')) !!}
    {!! Form::text('name', old('name') , ['class' => 'form-control','placeholder'=>trans('link.index.form.name.placeholder') ]) !!}
    @if ($errors->has('name'))
        <span class="help-block">{{ $errors->first('name') }}</span>
    @endif
</div>

<div class="form-group{{ $errors->has('url') ? ' has-error' : '' }}">
    {!! Form::label('url', trans('link.index.form.url.title')) !!}
    {!! Form::text('url', old('url') , ['class' => 'form-control','placeholder'=>trans('link.index.form.url.placeholder') ]) !!}
    @if ($errors->has('url'))
        <span class="help-block">{{ $errors->first('url') }}</span>
    @endif
</div>
