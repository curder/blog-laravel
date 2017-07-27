<ul class="list-group">
    @if(count($links))
        @foreach($links as $link)
            <li class="links-link list-group-item">
                <form action="{{ route('votes.store', $link) }}" method="post">
                    {{csrf_field()}}
                    <button class="btn{{ Auth::check() && Auth::user()->votedFor($link) ? ' btn-success' : ' btn-default' }}" {{ auth()->guest() ? 'disabled' : '' }} >{{ $link->votes->count()}}</button>
                </form>

                <a href="{{ route('links.channel',$link->channel ) }}" class="label label-default"
                   style="background-color: {{ $link->channel->color }}">
                    {{ $link->channel->name }}
                </a>
                <a href="{{ $link->url }}" target="_blank">{{ $link->name }}</a>
                <small>数据创建者：<a
                            href="#">{{ $link->creator->name }}</a> {{ $link->updated_at->diffForHumans() }}
                </small>
            </li>
        @endforeach
    @else
        <li class="list-group-item">No contribute yet.</li>
    @endif
</ul>
{{ $links->appends(request()->query())->links() }}

