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
        Schema::rename('education', 'certifications');
        Schema::table('certifications', function (Blueprint $table) {
            $table->renameColumn('school', 'institution');
            $table->renameColumn('degree', 'title');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('certifications', function (Blueprint $table) {
            $table->renameColumn('institution', 'school');
            $table->renameColumn('title', 'degree');
        });
        Schema::rename('certifications', 'education');
    }
};
