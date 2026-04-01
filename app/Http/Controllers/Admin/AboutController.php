<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AboutController extends Controller
{
    public function edit()
    {
        $about = \App\Models\About::first() ?? new \App\Models\About();

        if ($about->resume_file) {
            $about->resume_download_url = route('resume.download');
        }

        return \Inertia\Inertia::render('admin/about/edit', [
            'about' => $about,
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'content' => 'required|string',
            'resume_file' => 'nullable|file|mimes:pdf,doc,docx,txt|max:10240',
            'remove_resume_file' => 'nullable|boolean',
        ]);

        $about = \App\Models\About::first();
        $data = [
            'content' => $validated['content'],
        ];

        // Handle file upload
        if ($request->hasFile('resume_file')) {
            if ($about && $about->resume_file) {
                Storage::disk('public')->delete($about->resume_file);
            }

            $file = $request->file('resume_file');
            $data['resume_original_name'] = $file->getClientOriginalName();
            $data['resume_file'] = $file->store('resumes', 'public');
        }

        // Handle file removal
        if ($request->boolean('remove_resume_file') && $about && $about->resume_file) {
            Storage::disk('public')->delete($about->resume_file);
            $data['resume_file'] = null;
            $data['resume_original_name'] = null;
        }

        if ($about) {
            $about->update($data);
        } else {
            \App\Models\About::create($data);
        }

        return redirect()->back()->with('success', 'About section updated successfully!');
    }
}
