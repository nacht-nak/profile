<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        return \Inertia\Inertia::render('portfolio/home');
    }

    public function about()
    {
        return \Inertia\Inertia::render('portfolio/about', [
            'about' => \App\Models\About::first(),
        ]);
    }

    public function skills()
    {
        return \Inertia\Inertia::render('portfolio/skills', [
            'skills' => \App\Models\Skill::all(),
        ]);
    }

    public function certifications()
    {
        return \Inertia\Inertia::render('portfolio/certifications', [
            'certifications' => \App\Models\Certification::all(),
        ]);
    }

    public function projects()
    {
        return \Inertia\Inertia::render('portfolio/projects', [
            'projects' => \App\Models\Project::all(),
        ]);
    }

    public function contact()
    {
        return \Inertia\Inertia::render('portfolio/contact');
    }

    public function sendMessage(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        \App\Models\Message::create($validated);

        return redirect()->back()->with('success', 'Your message has been sent successfully!');
    }
}
