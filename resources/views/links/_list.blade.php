<ul class="list-group">
    @if($links->isNotEmpty())
        @foreach($links as $link)
            <li class="links-link list-group-item">
                <form action="{{ route('votes.store', $link) }}" method="post">
                    {{csrf_field()}}
                    <button class="btn {{ Auth::check() && Auth::user()->votedFor($link) ? ' btn-success' : ' btn-default' }}" {{ auth()->guest() ? 'disabled' : '' }} >{{ $link->votes->count()}}</button>
                </form>

                <a href="{{ route('links.channel', $link->channel ) }}" class="label label-default"
                   style="background-color: {{ $link->channel->color }}">
                    {{ $link->channel->name }}
                </a>
                <a href="{{ $link->url }}" target="_blank">{{ $link->name }}</a>
                <small> {{ trans('link.index.list.created_by') }} <a
                            href="#">{{ $link->creator->name }}</a> {{ $link->updated_at->diffForHumans() }}
                </small>
                <a href="{{ route('links.edit', $link) }}" class="btn btn-primary pull-right">@lang('global.edit')</a>
            </li>
        @endforeach
    @else
        <li class="list-group-item">{{ trans('global.empty') }}</li>
    @endif
</ul>
{{ $links->appends(request()->query())->links() }}

