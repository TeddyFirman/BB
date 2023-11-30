<?php

namespace App\Models;

use App\Models\Bab;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Subject extends Model
{
    use HasFactory;

    protected $table = 'subjects';

    protected $fillable = [
        'subject'
    ];

    public function babs()
    {
        return $this->hasMany(Bab::class, 'subject_id', 'id');
    }
}
