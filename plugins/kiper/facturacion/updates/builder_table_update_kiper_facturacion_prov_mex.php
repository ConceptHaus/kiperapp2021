<?php namespace Kiper\Facturacion\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateKiperFacturacionProvMex extends Migration
{
    public function up()
    {
        Schema::table('kiper_facturacion_prov_mex', function($table)
        {
            $table->renameColumn('id_pais', 'paises_id');
        });
    }
    
    public function down()
    {
        Schema::table('kiper_facturacion_prov_mex', function($table)
        {
            $table->renameColumn('paises_id', 'id_pais');
        });
    }
}
