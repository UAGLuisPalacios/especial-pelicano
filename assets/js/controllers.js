define(function (require) {
   
  var angular = require('angular'),
      Controllers = angular.module('controllers', []);
   
  Controllers.controller('angEmpController', require('controllers/angEmployeeController'));

  Controllers.controller('CuentaController', require('controllers/CuentaController'));

  Controllers.controller('EditorController', require('controllers/EditorController'));
   
  return Controllers;
   
});