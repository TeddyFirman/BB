<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BabAnswer extends Model
{
    use HasFactory;

    protected $table = 'babs_answers';

    protected $fillable =[
        'attempt_id',
        'question_id',
        // 'answer_id'
        'typed_answer'
    ];
}
