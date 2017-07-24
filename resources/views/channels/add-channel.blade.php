<div class="panel panel-default">
    <div class="panel-heading">{{ trans('global.create') }}</div>
    <div class="panel-body">
        {!! Form::open(['route' => 'channels.store', 'method' => 'post']) !!}

        @include('channels._form')
        <div class="form-group">
            <button class="btn btn-success">{{ trans('global.store') }}</button>
        </div>
        {!! Form::close() !!}
    </div>
</div>
