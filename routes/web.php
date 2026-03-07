<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;

Route::get('/', [\App\Http\Controllers\PortfolioController::class , 'index'])->name('home');
Route::get('/about', [\App\Http\Controllers\PortfolioController::class , 'about'])->name('about');
Route::get('/skills', [\App\Http\Controllers\PortfolioController::class , 'skills'])->name('skills');
Route::get('/certifications', [\App\Http\Controllers\PortfolioController::class , 'certifications'])->name('certifications');
Route::get('/projects', [\App\Http\Controllers\PortfolioController::class , 'projects'])->name('projects');
Route::get('/contact', [\App\Http\Controllers\PortfolioController::class , 'contact'])->name('contact');
Route::post('/message', [\App\Http\Controllers\PortfolioController::class , 'sendMessage'])->name('message.send');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class , 'index'])->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/admin.php';
