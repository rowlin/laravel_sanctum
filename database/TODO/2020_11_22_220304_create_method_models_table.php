<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Kalnoy\Nestedset\NestedSet;


class CreateMethodModelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('method_models', function (Blueprint $table) {
            $table->id();
            $table->string("name_ru")->nullable();
            $table->string("description_ru")->nullable();
            $table->string("name_en")->nullable();
            $table->string("description_en")->nullable();
            $table->string("name_ee")->nullable();
            $table->string("description_ee")->nullable();
            $table->boolean("status")->default(false);
            $table->integer("user_id");
            NestedSet::columns($table);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('method_models');
        /*
         *
         * NestedSet::dropColumns($table);
         */
    }
}
