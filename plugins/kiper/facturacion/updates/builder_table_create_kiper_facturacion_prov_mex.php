<?php namespace Kiper\Facturacion\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateKiperFacturacionProvMex extends Migration
{
    public function up()
    {
        Schema::create('kiper_facturacion_prov_mex', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('nombre', 100)->nullable();
            $table->smallInteger('status')->nullable();
            $table->integer('id_pais')->unsigned()->default(1);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('kiper_facturacion_prov_mex');
    }
}
