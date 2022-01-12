<?php namespace Kiper\Facturacion\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Mex extends Controller
{
    public $implement = [        'Backend\Behaviors\ListController',        'Backend\Behaviors\FormController',        'Backend\Behaviors\ReorderController'    ];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';
    public $reorderConfig = 'config_reorder.yaml';

    public $requiredPermissions = [
        'Facturaciones.admin' 
    ];

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Kiper.Facturacion', 'main-menu-item', 'side-menu-item2');
    }
}