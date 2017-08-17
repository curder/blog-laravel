    {!! Form::open(['route'=>['links.store'], 'method'=>'post']) !!}
    @include('links._form')
    <div class="form-group">
        <button type="submit" class="btn btn-primary">{{ trans('link.index.form.button') }}</button>
    </div>
    {!! Form::close() !!}
