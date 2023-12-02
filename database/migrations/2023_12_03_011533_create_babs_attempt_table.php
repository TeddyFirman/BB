<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('babs_attempt', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('bab_id');
            $table->unsignedBigInteger('user_id');
            $table->integer('status')->default('0');
            $table->float('marks')->nullable();

            $table->foreign('bab_id')->references('id')->on('babs')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('babs_attempt');
    }
};
