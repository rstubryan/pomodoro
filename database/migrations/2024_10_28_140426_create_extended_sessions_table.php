<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('extended_sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pomodoro_id')->constrained('pomodoro_sessions')->onDelete('cascade');
            $table->integer('additional_time'); // dalam detik
            $table->timestamp('extended_at')->useCurrent();
        });
    }

    public function down()
    {
        Schema::dropIfExists('extended_sessions');
    }
};
