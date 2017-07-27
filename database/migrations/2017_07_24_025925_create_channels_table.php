<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChannelsTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('channels', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 30)->comment('名称');
            $table->string('slug', 30)->unique()->comment('标志');
            $table->string('color')->comment('颜色');
            $table->string('keywords', 120)->comment('关键字');
            $table->string('description', 200)->comment('描述');
            $table->softDeletes()->comment('是否删除');
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
        Schema::drop('channels');
    }

}
