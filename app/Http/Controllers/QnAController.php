<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;

class QnAController extends Controller
{
    public function index()
    {
        $questions = Question::with('answers')->get();

        return response()->json(['data' => $questions]);
    }

    public function store(Request $request)
    {
        try {
            $questionId = Question::insertGetId([
                'question' => $request->question
            ]);

            // foreach ($request->answer as $answer) {
            // $is_correct = 1;
            // if ($request->is_correct == $answer) {
            //     $is_correct = 1;
            // }

            Answer::insert([
                'question_id' => $questionId,
                'answer' => $request->answer,
                'is_correct' => $request->is_correct
            ]);
            // }

            return response()->json(['success' => true, 'msg' => 'QnA berhasil ditambahkan']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()]);
        }
    }

    public function indexDetail(Request $request, $id)
    {
        $question = Question::with('answers')->findOrFail($id);

        $answers = $question->answers;

        return response()->json(['question' => $question, 'answers' => $answers]);
    }

    public function update(Request $request, $id)
    {
        try {
            $question = Question::findOrFail($id);

            // Periksa jika ada perubahan pada pertanyaan
            if ($request->has('question')) {
                $question->question = $request->question;
                $question->save();
            }

            // Periksa jika ada perubahan pada jawaban
            if ($request->has('answer')) {
                $answer = Answer::where('question_id', $id)->first();

                if ($answer) {
                    $answer->answer = $request->answer;
                    $answer->is_correct = $request->is_correct;
                    $answer->save();
                } else {
                    // Jika tidak ada jawaban, buat jawaban baru
                    Answer::create([
                        'question_id' => $id,
                        'answer' => $request->answer,
                        'is_correct' => $request->is_correct
                    ]);
                }
            }

            return response()->json(['success' => true, 'msg' => 'Pertanyaan dan/atau jawaban berhasil diperbarui']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()]);
        }
    }

    public function destroy($id)
    {
        try {

            Answer::where('question_id', $id)->delete();

            Question::destroy($id);

            return response()->json(['success' => true, 'msg' => 'Pertanyaan dan jawaban terkait berhasil dihapus']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()]);
        }
    }
}
