<?php

namespace App\Mail;

use App\Models\Message;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class MessageReply extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public Message $clientMessage,
        public string $replyContent
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Re: Your Message - ' . config('app.name'),
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.message-reply',
        );
    }
}
