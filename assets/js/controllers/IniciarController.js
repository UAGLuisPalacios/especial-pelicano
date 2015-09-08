define(function () {
  return ['$scope', '$route', '$routeParams', '$http', '$window', '$log', '$location', function($scope, $route, $routeParams, $http, $window, $log, $location) {

        //obtiene los datos de la url con el objeto location de angular
        var searchObject = $location.search();

        var profileid= searchObject.profileid;

        //Estructura basica del modelo view
        $scope.link = {
        titulo : '',
        id : '',
        edicion : ''
        };
        
        //resetItem: deja en blanco los datos del modal
        function resetItem(){
           $scope.link = {
              titulo : '',
              id : '',
              edicion : ''
           };              
           $scope.displayForm = '';
           
        }

        resetItem();
          
          //addItem: abre el modal
         $scope.addItem = function () {
           resetItem();
           $scope.displayForm = true;
         }
 
        //saveLink: Boton del modal para guardar los datos capturados en el modal
        $scope.saveItem = function () {
          var link = $scope.link;
              if (link.id.length == 0){
                    $http.get('/link/create?titulo=' + link.titulo ).success(function(data) {
                      $scope.items.push(data);
                      $scope.displayForm = '';
                      removeModal();
                      $window.location.href = '/app/iniciar#?linkid='+data.id +'&cuenta='+ profileid;
                    }).
                    error(function(data, status, headers, config) {
                    alert(data.summary);
                    });
              }
              else{
                    $http.get('/link/update/'+ link.id +'?titulo=' + link.titulo ).success(function(data) {
                      $scope.displayForm = '';
                      removeModal();
                    }).
                    error(function(data, status, headers, config) {
                      alert(data.summary);
                    });
              }
        };
        

        //editLink: Es cuando se abre el modal y carga los datos del controlador a la vista para
        //editar los datos del controlador desde la vista
        $scope.editItem = function (data) {       
                $scope.link = data;
                $scope.displayForm = true;
        }

        //removeItem: Borrar link desde la base de datos
        $scope.removeItem = function (data) {
          if (confirm('Do you really want to delete?')){
            $http['delete']('/link/' + data.id).success(function() {
              $scope.items.splice($scope.items.indexOf(data), 1);
            });
          }
        };
 
        //find: popular desde la base de datos la lista de los links a la vista
        $http.get('/link/find').success(function(data) {
          for (var i = 0; i < data.length; i++) {
            data[i].index = i;
          }
          $scope.items = data;
        });
 
        //removeModal: Esconde el modal
        function removeModal(){
          $('.modal').modal('hide');          
        }
 
  }];
});