<?php

use App\Http\Controllers\BadgeController;
use App\Http\Controllers\CertificateController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Str;

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
    return Inertia::render('Welcome', [
        'locale' => app()->getLocale(),
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/lesson/{screen:url}', [LessonController::class, 'challenge'])->name('lesson');
Route::get('/test', [LessonController::class, 'test'])->name('test');
Route::get('/lessons', [LessonController::class, 'index'])->name('lessons');
Route::post('saveprogress', [LessonController::class, 'saveProgress']);
Route::post('/update-user-settings', [ProfileController::class, 'userSettings'])->name('update-user-settings');

Route::get('/policy', function () {
    return Inertia::render('Typing/PrivacyPolicy', [
        'markdownContent' => file_get_contents(resource_path('markdown/policy.md')),
    ]);
})->name('policy');

Route::get('/terms', function () {
    return Inertia::render('Typing/PrivacyPolicy', [
        'markdownContent' => file_get_contents(resource_path('markdown/terms.md')),
    ]);
})->name('terms');

Route::get('/setlocale/{locale}', function (string $locale) {
    if (!in_array($locale, ['en', 'ckb'])) {
        abort(400);
    }

    App::setLocale($locale);
    session()->put('locale', $locale);
    return redirect()->back();
})->name('setlocale');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/badges', [BadgeController::class, 'index'])->name('badges');
    Route::get('/certificates', [CertificateController::class, 'index'])->name('certificates');
    Route::get('/certificate/{certificate}', [CertificateController::class, 'certificate'])->name('certificate');
    Route::get('/lessoncertificate/{lesson}', [CertificateController::class, 'currentLessonCertificate'])->name('lessoncertificate');
});

require __DIR__ . '/auth.php';
