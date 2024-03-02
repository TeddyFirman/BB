<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QnABab extends Model
{
    use HasFactory;

    protected $table = 'qna_babs';

    protected $fillable = [
        'bab_id',
        'question_id'
    ];

    public function question()
    {
        return $this->hasMany(Question::class, 'id', 'question_id');
    }

    public function answers()
    {
        return $this->hasMany(Answer::class, 'question_id', 'question_id');
    }
}
