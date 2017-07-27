<?php

namespace App\Providers;

use App\Repositories\ChannelRepository;
use App\Repositories\ChannelRepositoryEloquent;
use App\Repositories\PostRepository;
use App\Repositories\PostRepositoryEloquent;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ChannelRepository::class, ChannelRepositoryEloquent::class);
        $this->app->bind(PostRepository::class, PostRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\LinkRepository::class, \App\Repositories\LinkRepositoryEloquent::class);
        //:end-bindings:
    }
}
