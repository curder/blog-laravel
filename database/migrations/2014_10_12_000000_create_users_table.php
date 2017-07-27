<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 20)->notnull()->default('')->comment('用户名');
            $table->string('email')->unique()->comment('邮箱地址');
            $table->string('password')->comment('密码');
            $table->unsignedTinyInteger('is_admin')->default(0)->comment('是否超级管理');
            $table->boolean('trusted')->default(0)->comment('审核');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
