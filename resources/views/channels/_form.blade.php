<div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
    {!! Form::label('name', trans('channel.name.label')) !!}
    {!! Form::text('name',old('name'),array('class' => 'form-control','placeholder' => trans('channel.name.placeholder')) ) !!}
    @if ($errors->has('name'))
        <span class="help-block">{{ $errors->first('name') }}</span>
    @endif
</div>

<div class="form-group{{ $errors->has('slug') ? ' has-error' : '' }}">
    {!! Form::label('slug', trans('channel.slug.label')) !!}
    {!! Form::text('slug',old('slug'),array('class' => 'form-control','placeholder'=> trans('channel.slug.placeholder') ) ) !!}
    @if ($errors->has('slug'))
        <span class="help-block">{{ $errors->first('slug') }}</span>
    @endif
</div>

<div class="form-group{{ $errors->has('color') ? ' has-error' : '' }}">
    {!! Form::label('color', trans('channel.color.label')) !!}
    {!! Form::text('color',old('color'),array('class' => 'form-control','placeholder'=> trans('channel.color.placeholder') ) ) !!}
    @if ($errors->has('color'))
        <span class="help-block">{{ $errors->first('color') }}</span>
    @endif
</div>

