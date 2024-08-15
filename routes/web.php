<?php

use App\Http\Controllers\BadgeController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CertificateController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SocialController;
use App\Http\Controllers\StatController;
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


Route::get('blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('blog/{slug}', [BlogController::class, 'show'])->name('blog.show');


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

//for other providers
Route::get('/auth/{provider}/callback', [SocialController::class, 'handleProviderCallback']);
Route::get('/auth/{provider}', [SocialController::class, 'redirectToProvider']);

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
    Route::get('/stats', [StatController::class, 'index'])->name('stats');
    Route::get('/certificates', [CertificateController::class, 'index'])->name('certificates');
    Route::get('/certificate/{certificate}', [CertificateController::class, 'certificate'])->name('certificate');
    Route::get('/lessoncertificate/{lesson}', [CertificateController::class, 'currentLessonCertificate'])->name('lessoncertificate');
});

Route::post('feedback', [FeedbackController::class, 'store']);


require __DIR__ . '/auth.php';
