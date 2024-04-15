<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
	Route::prefix('/dashboard')->group(function () {
		Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
	});
	Route::prefix('tasks')->group(function () {
		Route::get('/', [TaskController::class, 'index'])->name('tasks');
		Route::get('/create', [TaskController::class, 'create'])->name('tasks.create');
		Route::get('/{task}/edit', [TaskController::class, 'edit'])->name('tasks.edit');
		Route::post('/store', [TaskController::class, 'store'])->name('tasks.store');
		Route::patch('/{task}/update', [TaskController::class, 'update'])->name('tasks.update');
		Route::delete('/{task}/delete', [TaskController::class, 'destroy'])->name('tasks.destroy');
	});
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
