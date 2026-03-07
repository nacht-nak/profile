<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $totalUsers = User::count();
        $adminUsers = User::where('is_admin', true)->count();
        $newRegistrations = User::where('created_at', '>=', now()->subDays(30))->count();
        
        return Inertia::render('admin/dashboard', [
            'stats' => [
                'totalUsers' => $totalUsers,
                'adminUsers' => $adminUsers,
                'newRegistrations' => $newRegistrations,
                'activeUsers' => $totalUsers, // Mocked for now
            ]
        ]);
    }
}
