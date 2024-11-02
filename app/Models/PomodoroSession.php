<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PomodoroSession extends Model
{
    protected $fillable = ['user_id', 'type', 'duration', 'start_time', 'end_time', 'completed'];

    public function tasks()
    {
        return $this->hasMany(Task::class, 'pomodoro_id');
    }
}