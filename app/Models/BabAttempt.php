<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BabAttempt extends Model
{
    use HasFactory;

    protected $table = 'babs_attempt';

    protected $fillable = [
        'bab_id',
        'user_id',
    ];
}
