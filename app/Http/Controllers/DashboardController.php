<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use App\Models\Certification;
use App\Models\Experience;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('dashboard', [
            'stats' => [
                'projects' => Project::count(),
                'skills' => Skill::count(),
                'certifications' => Certification::count(),
                'experiences' => Experience::count(),
                'messages' => Message::count(),
            ],
            'recentMessages' => Message::latest()->take(5)->get(['id', 'name', 'email', 'message', 'created_at']),
            'recentProjects' => Project::latest()->take(3)->get(['id', 'title', 'description', 'tech_stack', 'image']),
        ]);
    }
}
