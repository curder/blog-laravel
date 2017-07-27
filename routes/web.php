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

Route::resource('posts', 'PostsController');
Route::resource('channels', 'ChannelsController');
Route::get('links/{channel}', 'LinksController@index')->name('links.channel');
Route::resource('links', 'LinksController');
Route::post('votes/{link}','VotesController@store')->name('votes.store'); // 点赞、取消点赞
Route::post('upload', 'UploadsController@store')->name('uploads.store');
