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
        Schema::table('lessons', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('exercises', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('screens', function (Blueprint $table) {
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('lessons', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });

        Schema::table('exercises', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });

        Schema::table('screens', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
};
