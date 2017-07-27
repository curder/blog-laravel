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

Route::get('home', 'HomeController@index')->name('home');

Route::get('posts/{channel}/list', 'PostsController@index')->name('posts.channel'); // 分类下的文章
Route::resource('posts', 'PostsController');
Route::resource('channels', 'ChannelsController');
Route::get('links/{channel}/list', 'LinksController@index')->name('links.channel'); // 分类下的链接
Route::resource('links', 'LinksController');
Route::get('channels/{posts}', 'ChannelsController@posts')->name('channels.posts');

Route::post('votes/{link}', 'VotesController@store')->name('votes.store'); // 点赞、取消点赞
Route::post('upload', 'UploadsController@store')->name('uploads.store');
