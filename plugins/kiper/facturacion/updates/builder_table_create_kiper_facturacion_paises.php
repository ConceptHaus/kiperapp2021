<?php namespace Kiper\Facturacion\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateKiperFacturacionPaises extends Migration
{
    public function up()
    {
        Schema::create('kiper_facturacion_paises', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('pais', 255)->nullable();
            $table->string('codigo', 5)->nullable();
            $table->string('moneda', 5);
            $table->integer('status');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('kiper_facturacion_paises');
    }
}
