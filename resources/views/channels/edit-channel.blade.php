<div class="panel panel-default">
    <div class="panel-heading">{{ trans('global.edit') }}
        <a href="{{ route('channels.create') }}" class="pull-right">{{ trans('global.create') }}</a>
    </div>
    <div class="panel-body">
        {!! Form::model($channel, ['route' =>  ['channels.update',$channel], 'method' => 'patch']) !!}

        @include('channels._form')
        {!! Form::hidden('id',$channel->id) !!}
        <div class="form-group">
            <button class="btn btn-success">{{ trans('global.update') }}</button>
        </div>
        {!! Form::close() !!}
    </div>
</div>
