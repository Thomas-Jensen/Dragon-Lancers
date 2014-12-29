<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('home');
});

Route::get('home', 'PagesController@home');
Route::get('services', 'PagesController@services');
Route::get('work', 'PagesController@work');
Route::get('blog', 'PagesController@blog');
Route::get('coming', 'PagesController@coming');
Route::get('browser', 'PagesController@browser');


Route::resource('email', 'EmailController');
Route::post('contact', array('before' => 'csrf', 'uses' => 'EmailController@contact'));