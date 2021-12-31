<?php namespace Kiper\Facturacion\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateKiperFacturacionProvEu extends Migration
{
    public function up()
    {
        Schema::table('kiper_facturacion_prov_eu', function($table)
        {
            $table->renameColumn('id_pais', 'paises_id');
        });
    }
    
    public function down()
    {
        Schema::table('kiper_facturacion_prov_eu', function($table)
        {
            $table->renameColumn('paises_id', 'id_pais');
        });
    }
}
