<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function edit()
    {
        return \Inertia\Inertia::render('admin/about/edit', [
            'about' => \App\Models\About::first() ?? new \App\Models\About(),
        ]);
    }

    public function update(\Illuminate\Http\Request $request)
    {
        $validated = $request->validate([
            'content' => 'required|string',
            'resume_url' => 'nullable|url',
        ]);

        $about = \App\Models\About::first();
        if ($about) {
            $about->update($validated);
        }
        else {
            \App\Models\About::create($validated);
        }

        return redirect()->back()->with('success', 'About section updated successfully!');
    }
}
