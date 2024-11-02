<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['pomodoro_id', 'user_id', 'title', 'notes', 'is_completed'];

    public function session()
    {
        return $this->belongsTo(PomodoroSession::class, 'pomodoro_id');
    }
}