@extends('layouts.app')

@section('content')
    <div class="col-md-8 col-sm-offset-2">
        <div class="panel panel-default">
            <div class="panel-body">
                <article class="article">
                    <!-- 文章头部 -->
                    <header>
                        <h1>{{ $post->name }}</h1>
                        <!-- 文章属性列表 -->
                        <dl class="dl-inline">
                            <dt><i class="glyphicon glyphicon-time"></i></dt>
                            <dd>{{ $post->created_at }}</dd>
                            <dd><a href="#" class="label label-success">{{ $post->channel->name  }}</a></dd>
                            <dd class="pull-right">
                                <span class="label label-danger"><i class="glyphicon glyphicon-eye-open"></i> 235</span>
                            </dd>
                        </dl>
                        <section class="abstract">
                            <p><strong>摘要：</strong>{{ $post->description }}</p>
                        </section>
                    </header>
                    <!-- 文章正文部分 -->
                    <section class="content">
                        @inject('postPresenter', "App\Presenters\PostPresenter")
                        {!! $postPresenter->body2Html($post) !!}
                    </section>
                    <!-- 文章底部 -->
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
//    $(document).ready(function() {
//        $('pre code').each(function(i, block) {
//            hljs.highlightBlock(block);
//        });
//    });
</script>
@endsection
