<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\MessageReply;
use App\Models\Message;
use App\Models\Reply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return \Inertia\Inertia::render('admin/messages/index', [
            'messages' => Message::with('replies')->latest()->get(),
        ]);
    }

    /**
     * Reply to a message via email (supports multiple replies).
     */
    public function reply(Request $request, string $id)
    {
        $validated = $request->validate([
            'reply' => 'required|string|min:1',
        ]);

        $message = Message::findOrFail($id);

        // Save the reply in the replies table
        Reply::create([
            'message_id' => $message->id,
            'content' => $validated['reply'],
        ]);

        // Update the message's replied_at timestamp
        $message->update([
            'replied_at' => now(),
        ]);

        // Send the email
        Mail::to($message->email)->send(new MessageReply($message, $validated['reply']));

        return redirect()->back()->with('success', 'Reply sent successfully to ' . $message->email . '!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $message = Message::findOrFail($id);
        $message->delete();

        return redirect()->back()->with('success', 'Message deleted successfully!');
    }
}
