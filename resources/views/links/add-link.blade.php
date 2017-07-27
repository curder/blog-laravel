@if(auth()->check())
    {{--<h3>Contribute a link</h3>--}}
    <div class="panel panel-default">
        <div class="panel-body">
            <form action="{{ route('links.store') }}" method="post">
                {{ csrf_field() }}
                <div class="form-group {{ $errors->has('channel_id') ? 'has-error' : '' }}">
                    <label for="channel_id">{{ trans('link.index.form.channel_id.title') }}</label>
                    <select name="channel_id" id="channel_id" class="form-control">
                        <option disabled selected>{{ trans('link.index.form.channel_id.placeholder') }}</option>
                        @foreach($channels as $channel)
                            <option value="{{ $channel->id }}" {{ old('channel_id') == $channel->id ? 'selected' :'' }}>
                                {{ $channel->name }}
                            </option>
                        @endforeach
                    </select>
                    {!! $errors->first('channel_id', '<span class="help-block">:message</span>') !!}
                </div>

                <div class="form-group {{ $errors->has('name') ? 'has-error' : '' }}">
                    <label for="name">{{ trans('link.index.form.name.title') }}</label>
                    <input type="text" class="form-control" id="name" required value="{{ old('name') }}"
                           name="name" placeholder="{{ trans('link.index.form.name.placeholder') }}"/>
                    {!! $errors->first('name', '<span class="help-block">:message</span>') !!}
                </div>
                <div class="form-group {{ $errors->has('url') ? 'has-error' : '' }}">
                    <label for="url">{{ trans('link.index.form.url.title') }}</label>
                    <input type="text" class="form-control" id="url" name="url" required value="{{ old('url') }}"
                           placeholder="{{ trans('link.index.form.url.placeholder') }}"/>
                    {!! $errors->first('url', '<span class="help-block">:message</span>') !!}
                </div>
                <div class="form-group">
                    <button class="btn btn-primary">{{ trans('link.index.form.button') }}</button>
                </div>
            </form>
        </div>
    </div>
@else
    Please sign in!
@endif
