<?php

namespace App\Models;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
