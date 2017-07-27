<ul class="list-group">
    @if(count($channels))
        @inject('channelPresenter','App\Presenters\ChannelPresenter')
        @foreach($channels as $channel)
            <li class="channle list-group-item">
                <a href="{{ route('posts.channel', $channel ) }}" class="label label-default"
                   style="background-color: {{ $channel->color }}">
                    {{ $channel->name }}
                </a>
                <a href="#" target="_blank">{{ $channel->name }}</a>&nbsp;<span class="small">({{ $channel->slug }})</span>
                <span class="pull-right">
                    <a class="btn btn-primary btn-xs"
                       href="{{ route('channels.edit', $channel) }}">{{ trans('global.edit') }}</a>&nbsp;

                    <form action="{{ route('channels.destroy',$channel->id) }}"
                          method="POST"
                          class="pull-right">
                        {{ csrf_field() }}
                        {{ method_field('DELETE') }}
                        {!! Form::hidden('id', $channel->id) !!}
                        {!! $channelPresenter->showDeleteOrRestoreBtn($channel) !!}
                    </form>
                </span>
            </li>
        @endforeach
    @else
        <li class="list-group-item">{{ trans('global.empty') }}</li>
    @endif
</ul>
