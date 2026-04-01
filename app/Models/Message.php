<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ['name', 'email', 'message', 'reply', 'replied_at'];

    protected $casts = [
        'replied_at' => 'datetime',
    ];

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }
}
