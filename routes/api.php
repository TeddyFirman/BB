<?php

use App\Http\Controllers\Admin\BabController;
use App\Http\Controllers\Admin\MateriController;
use App\Http\Controllers\Admin\QnAController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// materi
Route::get('admin/materi', [MateriController::class, 'indexx']);
Route::post('admin/materi', [MateriController::class, 'store']);
Route::put('admin/materi/{id}', [MateriController::class, 'update']);
Route::delete('admin/materi/{id}', [MateriController::class, 'destroy']);

// bab
Route::get('admin/bab', [BabController::class, 'index']);
Route::post('admin/bab', [BabController::class, 'store']);
Route::put('admin/bab/{id}', [BabController::class, 'update']);
Route::delete('admin/bab/{id}', [BabController::class, 'destroy']);

// q&a
Route::get('admin/qna', [QnAController::class, 'index']);
Route::post('admin/qna', [QnAController::class, 'store']);
Route::get('admin/qna-details/{id}', [QnAController::class, 'indexDetail']);
Route::put('admin/qna/{id}', [QnAController::class, 'update']);
Route::delete('admin/qna/{id}', [QnAController::class, 'destroy']);
