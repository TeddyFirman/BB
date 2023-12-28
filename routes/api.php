<?php

use App\Http\Controllers\Admin\AddQNAController;
use App\Http\Controllers\Admin\BabController;
use App\Http\Controllers\Admin\MateriController;
use App\Http\Controllers\Admin\QnAController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\User\JawabanController;
use App\Http\Controllers\User\SoalController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->post('logout', [AuthController::class, 'logout']);

// Route::group(['middleware' => [\Spatie\Permission\Middleware\RoleMiddleware::using('admin')]], function () {
Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    // Route::group(['middleware' => ['role:admin']],function () {

    // Materi (Subject)
    Route::get('admin/materi', [MateriController::class, 'index'])->name('admin.materi');
    Route::post('admin/materi', [MateriController::class, 'store']);
    Route::put('admin/materi/{id}', [MateriController::class, 'update']);
    Route::delete('admin/materi/{id}', [MateriController::class, 'destroy']);

    // Bab (Chapter)
    Route::get('admin/bab', [BabController::class, 'index']);
    Route::post('admin/bab', [BabController::class, 'store']);
    Route::put('admin/bab/{id}', [BabController::class, 'update']);
    Route::delete('admin/bab/{id}', [BabController::class, 'destroy']);

    // Question-Answer
    Route::get('admin/qna', [QnAController::class, 'index']);
    Route::post('admin/qna', [QnAController::class, 'store']);
    Route::get('admin/qna-details/{id}', [QnAController::class, 'indexDetail']);
    Route::put('admin/qna/{id}', [QnAController::class, 'update']);
    Route::delete('admin/qna/{id}', [QnAController::class, 'destroy']);

    // Quiz
    Route::get('admin/get-question-quiz', [AddQNAController::class, 'index']);
    Route::post('admin/add-question-quiz', [AddQNAController::class, 'store']);
    Route::get('admin/see-question-quiz/{id}', [AddQNAController::class, 'indexQnA']);
    Route::delete('admin/delete-question-quiz/{id}', [AddQNAController::class, 'destroy']);
});


// middleware student/user
// Route::middleware(['auth'])->group(function () {
// Route::middleware('auth:sanctum')->group(function (Request $request) {

// Route::middleware('auth:sanctum')->group(function () {
Route::middleware(['auth:sanctum', 'role:user|admin'])->group(function () {

    // Soal
    Route::get('student/materi', [SoalController::class, 'indexSubject']);
    Route::get('student/bab-materi/{id}', [SoalController::class, 'indexBabMateri']);
    Route::get('student/form-soal/{id}', [SoalController::class, 'indexForm']);

    // Jawaban
    Route::post('student/bab-submit', [JawabanController::class, 'store']);
});
