<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    protected $fillable = ['institution', 'title', 'image', 'start_date', 'end_date', 'description'];
}
