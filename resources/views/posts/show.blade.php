@extends('layouts.app')
@section('title', $post->name)
@section('content')
    <div class="col-md-10 col-sm-offset-1">
        {!! Breadcrumbs::render('posts.show',$post) !!}
        <div class="panel panel-default">
            <div class="panel-body">
                <article class="article">
                    <header>
                        <h1>{{ $post->name }}</h1>
                        <dl class="dl-inline">
                            <dt><i class="glyphicon glyphicon-time"></i></dt>
                            <dd>{{ $post->created_at }}&nbsp;&nbsp;</dd>
                            <dd><a href="{{ route('posts.channel' , $post->channel) }}"
                                   class="label label-success">{{ $post->channel->name }}</a></dd>
                            <dd class="pull-right">
                                <span class="label label-info">
                                    <i class="glyphicon glyphicon-eye-open"></i> {{ $post->views }}
                                </span>
                            </dd>
                        </dl>
                        <section class="abstract">
                            <p><strong>摘要：</strong>{{ $post->description }}</p>
                        </section>
                    </header>
                    <section class="content">
                        @inject('postPresenter', "App\Presenters\PostPresenter")
                        {!! $postPresenter->body2Html($post) !!}
                    </section>
                    <nav>
                        <ul class="pager pager-justify">
                            @if($prev)
                                <li class="previous">
                                    <a href="{{ route('posts.show', $prev) }}"><span aria-hidden="true">&larr;</span>
                                        上一篇</a>
                                </li>
                            @endif
                            @if($next)
                                <li class="next">
                                    <a href="{{ route('posts.show', $next) }}">下一篇 <span
                                                aria-hidden="true">&rarr;</span></a>
                                </li>
                            @else
                                <li class="next disabled">
                                    <a href="#">没有下一篇</a>
                                </li>
                            @endif
                        </ul>
                    </nav>
                </article>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script>
        // 代码高亮
        $(document).ready(function () {
            $('pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        });
    </script>
@endsection
