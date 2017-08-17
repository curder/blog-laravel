<ul class="list-group">
    @if(count($posts))
        @inject('postPresenter','App\Presenters\PostPresenter')
        @foreach($posts as $post)
            <li class="channle list-group-item">
                <a href="{{ route('posts.channel', $post->channel) }}" class="label label-default"
                   style="background-color: {{ $post->channel->color }}">
                    {{ $post->channel->name }}
                </a>
                <a href="{{ route('posts.show', $post) }}" target="_blank">{{ $post->name }}</a>
                <span class="pull-right">
                    <a class="btn btn-primary btn-xs"
                       href="{{ route('posts.edit', $post) }}">{{ trans('global.edit') }}</a>&nbsp;

                    <form action="{{ route('posts.destroy',$post->id) }}"
                          method="POST"
                          class="pull-right">
                        {{ csrf_field() }}
                        {{ method_field('DELETE') }}
                        {!! Form::hidden('id', $post->id) !!}
                        {!! $postPresenter->showDeleteOrRestoreBtn($post) !!}
                    </form>
                </span>
            </li>
        @endforeach
    @else
        <li class="list-group-item">{{ trans('global.empty') }} <a href="{{ route('posts.create') }}">Click me
                to {{ trans('global.create') }}</a></li>
    @endif
</ul>
