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



Route::group(['middleware' => 'auth'], function () {
    Route::resource('posts', 'PostsController', [
        'only' => ['update', 'edit', 'store', 'destroy', 'create'],
    ]);
    Route::resource('channels', 'ChannelsController', [
        'only' => ['store', 'update', 'index', 'edit', 'destroy', 'create']
    ]);
    Route::resource('links', 'LinksController', [
        'only' => ['create', 'store', 'edit', 'update', 'destroy'],
    ]);
    Route::post('votes/{link}', 'VotesController@store')->name('votes.store'); // 点赞、取消点赞
    Route::post('upload', 'UploadsController@store')->name('uploads.store'); // 上传数据
});


Route::get('posts/{channel?}/lists', 'PostsController@index')->name('posts.channel'); // 分类下的文章
Route::get('posts', 'PostsController@index')->name('posts.index');
Route::get('posts/{post}', 'PostsController@show')->name('posts.show');

Route::get('links', 'LinksController@index')->name('links.index'); // 链接列表
Route::get('links/{channel}/lists', 'LinksController@index')->name('links.channel'); // 分类下的链接列表
