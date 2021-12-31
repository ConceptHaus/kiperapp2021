<?php namespace Kiper\Facturacion\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateKiperFacturacionProvMx extends Migration
{
    public function up()
    {
        Schema::rename('kiper_facturacion_prov_mex', 'kiper_facturacion_prov_mx');
    }
    
    public function down()
    {
        Schema::rename('kiper_facturacion_prov_mx', 'kiper_facturacion_prov_mex');
    }
}
