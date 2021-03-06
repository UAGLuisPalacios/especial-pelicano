require.config({
urlArgs: "bust=" + (new Date()).getTime(),
paths: {
'angular': '../vendor/angular/angular',
'angular-route': '../vendor/angular-route/angular-route',
'jquery': '../vendor/jquery/dist/jquery',
'bootstrapJs': '../vendor/bootstrap/dist/js/bootstrap'
},
/**
* for libs that either do not support AMD out of the box, or
* require some fine tuning to dependency mgt'
*/
shim: {
'bootstrapJs': ['jquery'],
'angular': {'exports': 'angular'},
'angular-route' : ['angular']
}
});
window.name = "NG_DEFER_BOOTSTRAP!";
require([
'angular',
'app',
'angular-route',
'bootstrapJs'
], function(angular, app) {
'use strict';
var $html = angular.element(document.getElementsByTagName('html')[0]);
angular.element().ready(function() {
angular.resumeBootstrap([app.name]);
});
}
);