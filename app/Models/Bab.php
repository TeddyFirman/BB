<?php

namespace App\Models;

use App\Models\Subject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bab extends Model
{
    use HasFactory;

    protected $table = 'babs';

    protected $fillable = [
        'subject_id',
        'judul',
        'pertanyaan',
        'form_id'
    ];

    public function subject()
    {
        return $this->belongsTo(Subject::class, 'subject_id', 'id');
    }

    public function getQna()
    {
        return $this->hasMany(QnABab::class, 'bab_id', 'id');
    }
}
