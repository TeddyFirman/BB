<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Answer;
use App\Models\BabAnswer;
use App\Models\BabAttempt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class JawabanController extends Controller
{
    public function store(Request $request)
    {
        $attempt_id = BabAttempt::insertGetId([
            'bab_id' => $request->bab_id,
            'user_id' => Auth::user()->id
            // 'user_id' => $request->input('user_id')
        ]);

        $qcount = count($request->q);

        // * Tambahan Remark
        $isAllCorrect = true;

        if ($qcount > 0) {
            for ($i = 0; $i < $qcount; $i++) {

                $typedAnswer = $request->input('ans_' . ($i + 1));

                BabAnswer::insert([
                    'attempt_id' => $attempt_id,
                    'question_id' => $request->q[$i],
                    'typed_answer' => $typedAnswer
                ]);

                //? Check typed_answer dan answer
                $isCorrect = $this->checkAnswer($request->q[$i], $typedAnswer);

                if (!$isCorrect) {
                    $isAllCorrect = false;
                }
            }
        }

        $status = $isAllCorrect ? 2 : 1;
        BabAttempt::where('id', $attempt_id)->update(['status' => $status]);

        return response()->json(['success' => true, 'message' => 'Terima Kasih Telah mengerjakan']);
    }

    private function checkAnswer($questionId, $typedAnswer)
    {
        $correctAnswer = Answer::where('question_id', $questionId)->first()->answer;

        return $typedAnswer === $correctAnswer;
    }
}
