define(function (require) {
   
  var angular = require('angular'),
      Controllers = angular.module('controllers', []);
   
  Controllers.controller('CuentaController', require('controllers/CuentaController'));

  Controllers.controller('EditorController', require('controllers/EditorController'));

  Controllers.controller('SuscripcionController', require('controllers/SuscripcionController'));
   
  return Controllers;
   
});