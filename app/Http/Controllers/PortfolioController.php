<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PortfolioController extends Controller
{
    public function index()
    {
        return \Inertia\Inertia::render('portfolio/home');
    }

    public function about()
    {
        $about = \App\Models\About::first();

        // Append the download URL if a resume file exists
        if ($about && $about->resume_file) {
            $about->resume_download_url = route('resume.download');
        }

        return \Inertia\Inertia::render('portfolio/about', [
            'about' => $about,
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

    public function downloadResume()
    {
        $about = \App\Models\About::first();

        if (!$about || empty($about->resume_file)) {
            return redirect()->back()->with('error', 'No resume file found.');
        }

        if (!Storage::disk('public')->exists($about->resume_file)) {
            return redirect()->back()->with('error', 'File not found on disk.');
        }

        $path = Storage::disk('public')->path($about->resume_file);
        
        // If the database doesn't have an original name, use the file's extension to build one
        $extension = pathinfo($path, PATHINFO_EXTENSION) ?: 'pdf';
        $fileName = $about->resume_original_name ?: 'my_resume.' . $extension;
        
        return response()->download($path, $fileName, [
            'Content-Type' => Storage::disk('public')->mimeType($about->resume_file),
            'Content-Disposition' => 'attachment; filename="' . $fileName . '"',
        ]);
    }
}
