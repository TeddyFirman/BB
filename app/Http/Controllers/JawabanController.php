<?php

namespace App\Http\Controllers;

use App\Models\BabAnswer;
use App\Models\BabAttempt;
use Illuminate\Http\Request;

class JawabanController extends Controller
{
    public function store(Request $request)
    {
        $attempt_id = BabAttempt::insertGetId([
            'bab_id' => $request->bab_id,
            // 'user_id' => Auth::user()->id
            'user_id' => $request->input('user_id')
        ]);

        $qcount = count($request->q);
        if($qcount > 0) {
            for($i = 0; $i < $qcount; $i++) {

                $typedAnswer = $request->input('ans_' . ($i + 1));

                BabAnswer::insert([
                    'attempt_id' => $attempt_id,
                    'question_id' => $request->q[$i],
                    'typed_answer' => $typedAnswer
                ]);
            }
        }

        return response()->json(['success' => true, 'message' => 'Terima Kasih Telah mengerjakan']);
    }
}
