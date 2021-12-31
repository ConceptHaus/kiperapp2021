<?php namespace Kiper\Facturacion\Models;

use Model;

/**
 * Model
 */
class Mex extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'kiper_facturacion_prov_mex';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
