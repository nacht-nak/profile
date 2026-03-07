<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\MessageController;
use App\Http\Controllers\Admin\SkillController;
use App\Http\Controllers\Admin\CertificationController;
use App\Http\Controllers\Admin\ExperienceController;
use App\Http\Controllers\Admin\AboutController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class , 'index'])->name('dashboard');
    Route::resource('users', UserController::class)->except(['show']);
    Route::resource('projects', ProjectController::class);
    Route::resource('messages', MessageController::class)->only(['index', 'destroy']);
    Route::resource('skills', SkillController::class);
    Route::resource('certifications', CertificationController::class);
    Route::resource('experiences', ExperienceController::class);
    Route::get('/about', [AboutController::class , 'edit'])->name('about.edit');
    Route::put('/about', [AboutController::class , 'update'])->name('about.update');
});
