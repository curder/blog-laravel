<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('posts/create', 'PostsController@create')->name('posts.create'); // 新增文章
Route::post('posts', 'PostsController@store')->name('posts.store'); // 文章列表

Route::resource('channels', 'ChannelsController', ['names' => 'channels']);
