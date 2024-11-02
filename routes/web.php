<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PomodoroSessionController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/home', function () {
    return Inertia::render('Home');
});

Route::prefix('pomodoro_sessions')->group(function () {
    Route::get('/', [PomodoroSessionController::class, 'index'])->name('pomodoro_sessions.index');
    Route::get('/create', [PomodoroSessionController::class, 'create'])->name('pomodoro_sessions.create');
    Route::post('/', [PomodoroSessionController::class, 'store'])->name('pomodoro_sessions.store');
    Route::get('/{id}', [PomodoroSessionController::class, 'show'])->name('pomodoro_sessions.show');
    Route::get('/{id}/edit', [PomodoroSessionController::class, 'edit'])->name('pomodoro_sessions.edit');
    Route::put('/{id}', [PomodoroSessionController::class, 'update'])->name('pomodoro_sessions.update');
    Route::delete('/{id}', [PomodoroSessionController::class, 'destroy'])->name('pomodoro_sessions.destroy');

    Route::post('/{sessionId}/tasks', [TaskController::class, 'store'])->name('tasks.store');
});

require __DIR__.'/auth.php';
