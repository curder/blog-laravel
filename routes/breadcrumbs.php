<?php

// Admin Home Page
Breadcrumbs::register('/', function ($breadcrumbs) {
    $breadcrumbs->push(trans('global.home'), '/');
});

Breadcrumbs::register('posts.index', function ($breadcrumbs, $channel = null) {
    $breadcrumbs->parent('/');
    if ($channel && $channel->exists) {
        $breadcrumbs->push($channel->name . ' ' . trans('post.all.title'), route('posts.channel', $channel));
    } else {
        $breadcrumbs->push(trans('post.all.title'), route('posts.index'));
    }
});

Breadcrumbs::register('posts.create', function ($breadcrumbs) {
    $breadcrumbs->parent('posts.index');
    $breadcrumbs->push(trans('post.create'), route('posts.create'));
});

Breadcrumbs::register('posts.show', function ($breadcrumbs, $post) {
    $breadcrumbs->parent('posts.index', $post->channel);
    $breadcrumbs->push($post->name);
});
Breadcrumbs::register('posts.edit', function ($breadcrumbs, $post) {
    $breadcrumbs->parent('posts.index', $post->channel);

//    $breadcrumbs->push($post->channel->name, route('posts.channel', $post->channel));
    $breadcrumbs->push($post->name);
});


Breadcrumbs::register('channels.index', function ($breadcrumbs) {
    $breadcrumbs->parent('/');
    $breadcrumbs->push(trans('channel.all.title'), route('channels.index'));
});
Breadcrumbs::register('channels.edit', function ($breadcrumbs, $channel) {
    $breadcrumbs->parent('channels.index');
    $breadcrumbs->push($channel->name);
});
