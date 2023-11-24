<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ExerciseController extends Controller
{
  /**
   * Display Exercise List.
   */
  public function show()
  {
    return Inertia::render('Exercise', []);
  }
}
