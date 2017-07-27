<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLinksTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('links', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->index()->comment('用户');
            $table->unsignedInteger('channel_id')->index()->comment('分类');
            $table->string('name', 60)->comment('链接名称');
            $table->string('url', 120)->unique()->comment('链接地址');
            $table->boolean('approved')->default('0')->comment('审批');
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
        Schema::drop('links');
    }

}
