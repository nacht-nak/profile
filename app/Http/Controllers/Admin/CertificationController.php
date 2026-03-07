<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Certification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CertificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return \Inertia\Inertia::render('admin/certifications/index', [
            'certifications' => Certification::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return \Inertia\Inertia::render('admin/certifications/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'institution' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'start_date' => 'required|string',
            'end_date' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('certifications', 'public');
            $validated['image'] = '/storage/' . $path;
        }

        Certification::create($validated);

        return redirect()->route('admin.certifications.index')->with('success', 'Certification added successfully!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Certification $certification)
    {
        return \Inertia\Inertia::render('admin/certifications/edit', [
            'certification' => $certification,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Certification $certification)
    {
        $validated = $request->validate([
            'institution' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'start_date' => 'required|string',
            'end_date' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image if it exists
            if ($certification->image) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $certification->image));
            }
            $path = $request->file('image')->store('certifications', 'public');
            $validated['image'] = '/storage/' . $path;
        }

        $certification->update($validated);

        return redirect()->back()->with('success', 'Certification updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Certification $certification)
    {
        if ($certification->image) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $certification->image));
        }
        $certification->delete();

        return redirect()->back()->with('success', 'Certification deleted successfully!');
    }
}
