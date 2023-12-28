<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\BabAttempt;
use App\Models\BabAnswer;
use App\Models\Subject;
use App\Models\Answer;
use App\Models\QnABab;
use App\Models\Bab;
use Inertia\Inertia;

class SoalController extends Controller
{
    public function view()
    {
        return Inertia::render('Student/Index');
    }

    public function viewChapter()
    {
        return Inertia::render('Student/Chapter/Index');
    }

    public function viewExercise()
    {
        return Inertia::render('Student/Exercise/Index');
    }

    public function indexSubject()
    {
        $materis = Subject::all();

        return response()->json(['data' => $materis]);
    }

    public function indexBabMateri($id)
    {
        $subject = Subject::with('babs')->findOrFail($id);

        $babs = $subject->babs;

        $babIds = $babs->pluck('id')->toArray();

        $babAttempts = BabAttempt::whereIn('bab_id', $babIds)->get();

        $babData = [];

        foreach ($babAttempts as $babAttempt) {
            $attemptId = $babAttempt->id;
            $babAnswers = BabAnswer::where('attempt_id', $attemptId)->get();

            $processedBabAnswers = [];
            $isCompleted = true;

            foreach ($babAnswers as $babAnswer) {
                $answer = Answer::where('question_id', $babAnswer->question_id)->first()->answer;

                $babAnswer->update(['is_correct' => ($babAnswer->typed_answer === $answer)]);

                $processedBabAnswers = [
                    'attempt_id' => $babAnswer->attempt_id,
                    'typed_answer' => $babAnswer->typed_answer,
                    'is_correct' => $babAnswer->is_correct
                ];

                $isCompleted = $isCompleted && $babAnswer->typed_answer === $answer;

                $processedBabAnswers[] = $processedBabAnswers;
            }

            $status = $isCompleted ? 'completed' : 'tried';

            $babData[] = [
                'attempt_id' => $attemptId,
                'bab_answers' => $processedBabAnswers,
                'status' => $status
            ];
        }

        return response()->json(['babs' => $babs, 'Data Remark' => $babData]);
    }

    public function indexForm($id)
    {
        $formQna = Bab::where('form_id', $id)->with('getQna')->get();

        if (count($formQna) > 0) {
            if (count($formQna[0]['getQna']) > 0) {
                $qna = QnABab::where('bab_id', $formQna[0]['id'])->with('question')->get();

                return response()->json(['success' => true, 'bab' => $formQna, 'qna' => $qna]);
            } else {
                return response()->json(['success' => false, 'message' => '404 Not Found QNA']);
            }
        } else {
            return response()->json(['success' => false, 'message' => '404 Not Found']);
        }
    }
}
