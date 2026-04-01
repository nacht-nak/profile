<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected $table = 'message_replies';

    protected $fillable = ['message_id', 'content'];

    public function message()
    {
        return $this->belongsTo(Message::class);
    }
}
