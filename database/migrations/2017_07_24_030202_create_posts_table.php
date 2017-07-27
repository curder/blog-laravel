<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->comment('发布者');
            $table->unsignedInteger('channel_id')->comment('分类');
            $table->string('name', 60)->nullable()->comment('标题');
            $table->string('slug')->nullable()->comment('标记');
            $table->unsignedTinyInteger('status')->default(1)->comment('状态');
            $table->unsignedInteger('views')->default(1)->comment('浏览数');
            $table->text('body')->comment('内容');
            $table->unsignedTinyInteger('approved')->default(0)->comment('审批');
            $table->string('keywords', 120)->nullable()->comment('关键字');
            $table->string('description', 200)->nullable()->comment('描述');
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
        Schema::drop('posts');
    }

}
