<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\PomodoroSession;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function store(Request $request, $sessionId)
    {
        $session = PomodoroSession::findOrFail($sessionId);
        $task = new Task($request->all());
        $session->tasks()->save($task);
        return redirect()->route('pomodoro_sessions.show', $sessionId);
    }
}