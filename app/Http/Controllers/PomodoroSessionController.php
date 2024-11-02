<?php

namespace App\Http\Controllers;

use App\Models\PomodoroSession;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PomodoroSessionController extends Controller
{
    public function index()
    {
        $sessions = PomodoroSession::all();
        return Inertia::render('PomodoroSessions/Index', ['sessions' => $sessions]);
    }

    public function create()
    {
        return Inertia::render('PomodoroSessions/Create');
    }

    public function store(Request $request)
    {
        $session = PomodoroSession::create($request->all());
        return redirect()->route('pomodoro_sessions.index');
    }

    public function show($id)
    {
        $session = PomodoroSession::findOrFail($id);
        return Inertia::render('PomodoroSessions/Show', ['session' => $session]);
    }

    public function edit($id)
    {
        $session = PomodoroSession::findOrFail($id);
        return Inertia::render('PomodoroSessions/Edit', ['session' => $session]);
    }

    public function update(Request $request, $id)
    {
        $session = PomodoroSession::findOrFail($id);
        $session->update($request->all());
        return redirect()->route('pomodoro_sessions.index');
    }

    public function destroy($id)
    {
        $session = PomodoroSession::findOrFail($id);
        $session->delete();
        return redirect()->route('pomodoro_sessions.index');
    }
}