define(function () {
  return ['$scope', '$route', '$routeParams', '$http', '$window', '$log', '$location', function($scope, $route, $routeParams, $http, $window, $log, $location) {

      var searchObject = $location.search();

      var edicionid= searchObject.edicionid;

      $scope.links = {
        titulo : '',
        id : '',
      };
 
      function resetItem(){
        $scope.links = {
          titulo : '',
          id : ''
        };              
        $scope.displayForm = '';
      }

      resetItem();
       
      $scope.addItem = function () {
        resetItem();
        $scope.displayForm = true;
      }
       
      $scope.saveItem = function () {
        var links = $scope.links;
        if (links.id.length == 0){
          $http.get('/link/create?titulo=' + links.titulo + '&publicacion=' + edicionid ).success(function(data) {
            $scope.items.push(data);
            $scope.displayForm = '';
            removeModal();
            $window.location.href = '/app/iniciar#?edicionid='+edicionid +'&cuenta='+ profileid;
          }).
          error(function(data, status, headers, config) {
            alert(data.summary);
          });
        }
        else{
          $http.get('/link/update/'+ links.id +'?titulo=' + links.titulo ).success(function(data) {
          $scope.displayForm = '';
          removeModal();
          }).
          error(function(data, status, headers, config) {
            alert(data.summary);
          });
        }
      };

      $scope.editItem = function (data) {       
        $scope.links = data;
        $scope.displayForm = true;
      }
       
      $scope.removeItem = function (data) {
        if (confirm('Do you really want to delete?')){
          $http['delete']('/links/' + data.id).success(function() {
            $scope.items.splice($scope.items.indexOf(data), 1);
          });
        }
      };
       
      $http.get('/edicion/' + edicionid).success(function(data) {
        for (var i = 0; i < data.length; i++) {
          data[i].index = i;
        }
        $scope.items = data;

        $scope.links = data.links[0];

      });
       
      function removeModal(){
        $('.modal').modal('hide');          
      }
 
  }];
});