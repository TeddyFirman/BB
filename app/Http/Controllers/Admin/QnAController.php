<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QnAController extends Controller
{

    public function view()
    {
        return Inertia::render('Admin/Question/Index');
    }

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

            return response()->json(['success' => true, 'msg' => 'QnA Berhasil Ditambahkan']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()]);
        }
    }

    public function indexDetail(Request $request, $id)
    {
        $answers = Answer::where('question_id', $id)->first();

        return response()->json(['answers' => $answers]);
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

            return response()->json(['success' => true, 'message' => 'Pertanyaan Dan/Atau Jawaban Berhasil Diperbarui']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()]);
        }
    }

    public function destroy($id)
    {
        try {

            Answer::where('question_id', $id)->delete();

            Question::destroy($id);

            return response()->json(['success' => true, 'message' => 'Pertanyaan & Jawaban Berhasil Dihapus']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'messgae' => $e->getMessage()]);
        }
    }
}
