define(function () {
    return ['$scope', '$route', '$routeParams', '$http', '$window', '$log', '$location', function($scope, $route, $routeParams, $http, $window, $log, $location) {
      	var searchObject = $location.search();

        $http.get('/cuenta/'+ searchObject.profileid).success(function(data) {
          $scope.perfil = data;
        });
 
    }];
});