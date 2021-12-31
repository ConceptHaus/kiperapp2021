<?php namespace Kiper\Facturacion\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateKiperFacturacionProvMx2 extends Migration
{
    public function up()
    {
        Schema::table('kiper_facturacion_prov_mx', function($table)
        {
            $table->string('codigo', 5)->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('kiper_facturacion_prov_mx', function($table)
        {
            $table->dropColumn('codigo');
        });
    }
}
