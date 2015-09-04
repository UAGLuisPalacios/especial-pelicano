define(['angular','controllers'], function (angular) {
    'use strict';  
    var app =  angular.module('employee', [
    	'ngRoute',
        'controllers'
    ]);

    return app;
}); 