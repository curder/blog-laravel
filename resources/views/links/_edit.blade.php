{!! Form::model($link,['route'=>['links.update',$link], 'method'=>'patch']) !!}
@include('links._form')
<div class="form-group">
    {!! Form::hidden('id', $link->id) !!}
    <button type="submit" class="btn btn-primary">{{ trans('global.update') }}</button>
</div>
{!! Form::close() !!}
