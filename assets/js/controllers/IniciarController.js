define(function () {
  return ['$scope', '$route', '$routeParams', '$http', '$window', '$log', '$location', function($scope, $route, $routeParams, $http, $window, $log, $location) {

      /////////////////////////////////////INDICE
      /////////////////////////////////////1 LINKS 
      /////////////////////////////////////2 REUNIONES

      /////////////////////////////////////
      var searchObject = $location.search();

      var edicionid= searchObject.edicionid;


      $scope.links = {
        titulo : '',
        id : ''
      };

      $scope.actividades = {
        titulo : '',
        id : ''
      };

      $scope.magazine = {
        titulo : '',
        id : ''
      };

      /////////////////////////////////////1 LINKS

 
      function resetLink(){
        $scope.links = {
          titulo : '',
          id : ''
        };              
        $scope.displayForm = '';
      }

      function resetActividades(){
        $scope.actividades = {
          titulo : '',
          id : ''
        };              
        $scope.displayForm = '';
      }

      resetLink();

      resetActividades();
       
      $scope.addLink = function () {
        resetLink();
        $scope.displayForm = true;
      }
       
      $scope.saveLink = function () {
        var it = $scope.items;
        var links = $scope.links;
        if (links.id.length == 0){
          $http.get('/link/create?titulo=' + links.titulo + '&publicacion=' + edicionid ).success(function(data) {
            $scope.items.links.push(data);
            $scope.displayForm = '';
            removeModal();
            $window.location.href = '/app/iniciar#?edicionid='+edicionid;
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

      $scope.editLink = function (data) {       
        $scope.links = data;
        $scope.displayForm = true;
      }
       
      $scope.removeLink = function (data) {
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

        $scope.actividades = data.actividades[0];

        $scope.magazine = data.magazine;

      });
       
      function removeModal(){
        $('.modal').modal('hide');          
      }



      /////////////////////////////////////2 REUNIONES
 
      
       
      $scope.addActividades = function () {
        resetLink();
        $scope.displayForm = true;
      }
       
      $scope.saveActividades = function () {
        var actividades = $scope.actividades;
        if (actividades.id.length == 0){
          $http.get('/actividad/create?titulo=' + links.titulo + '&publicacion=' + edicionid ).success(function(data) {
            $scope.items.push(data);
            $scope.displayForm = '';
            removeModal();
            $window.location.href = '/app/iniciar#?edicionid='+edicionid +'&profileid='+ profileid;
          }).
          error(function(data, status, headers, config) {
            alert(data.summary);
          });
        }
        else{
          $http.get('/actividad/update/'+ links.id +'?titulo=' + links.titulo ).success(function(data) {
          $scope.displayForm = '';
          removeModal();
          }).
          error(function(data, status, headers, config) {
            alert(data.summary);
          });
        }
      };

      $scope.editActividades = function (data) {       
        $scope.actividades = data;
        $scope.displayForm = true;
      }
       
      $scope.removeActividades = function (data) {
        if (confirm('Do you really want to delete?')){
          $http['delete']('/actividad/' + data.id).success(function() {
            $scope.items.splice($scope.items.indexOf(data), 1);
          });
        }
      };
       
      function removeModalActividades(){
        $('.modalActividades').modal('hide');          
      }
 
  }];
});