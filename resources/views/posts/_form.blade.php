<div class="form-group{{ $errors->has('channel_id') ? ' has-error' : '' }}">
    {!! Form::label('channel_id', trans('post.form.channel_id.title') , ['class'=>'form-label']) !!}
    {!! Form::select('channel_id', $channels , null , ['class' => 'form-control','placeholder'=>trans('post.form.channel_id.placeholder')]) !!}
    @if ($errors->has('channel_id'))
        <span class="help-block">{{ $errors->first('channel_id') }}</span>
    @endif
</div>
<div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
    {!! Form::label('name', trans('post.form.name.title'), ['class'=>'form-label']) !!}
    {!! Form::text('name',null,['class'=>'form-control','placeholder'=>trans('post.form.name.placeholder')]) !!}
    @if ($errors->has('name'))
        <span class="help-block">{{ $errors->first('name') }}</span>
    @endif
</div>
<div class="form-group{{ $errors->has('keywords') ? ' has-error' : '' }}">
    {!! Form::label('keywords', trans('post.form.keywords.title'), ['class'=>'form-label']) !!}
    {!! Form::text('keywords',null,['class'=>'form-control', 'placeholder'=>trans('post.form.keywords.placeholder')]) !!}
    @if ($errors->has('keywords'))
        <span class="help-block">{{ $errors->first('keywords') }}</span>
    @endif
</div>
<div class="form-group{{ $errors->has('description') ? ' has-error' : '' }}">
    {!! Form::label('description', trans('post.form.description.title'), ['class'=>'form-label']) !!}
    {!! Form::textarea('description', null, ['class' => 'form-control','rows'=> 2 ,'placeholder'=>trans('post.form.description.placeholder')]) !!}
    @if ($errors->has('description'))
        <span class="help-block">{{ $errors->first('description') }}</span>
    @endif
</div>
<div class="form-group editor{{ $errors->has('body') ? ' has-error' : '' }}">
    {!! Form::label('body', trans('post.form.body.title'),['class'=>'control-label']) !!}
    {!! Form::textarea('body', null, ['class' => 'form-control','id'=>'markdownEditor','placeholder'=>trans('post.form.body.placeholder')]) !!}
    @if ($errors->has('body'))
        <span class="help-block">{{ $errors->first('body') }}</span>
    @endif
</div>
@section('script')
    @include('editor::head')
@endsection
