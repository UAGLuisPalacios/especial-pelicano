define(function () {
    return ['$scope', '$http', '$window', function($scope, $http, $window) {
      
      $scope.perfil = {
      nombre : '',
      email : '',
      id : '',

   };
 
function resetItem(){
   $scope.cuenta = {
      nombre : '',
      email : '',
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
  var cuenta = $scope.cuenta;
      if (cuenta.id.length == 0){
            $http.get('/cuenta/create?nombre=' + cuenta.nombre + '&email=' +  cuenta.email ).success(function(data) {
              $scope.items.push(data);
              $scope.displayForm = '';
              removeModal();
              $window.location.href = '/app/lobby#?profileid=' +data.datos;
            }).
  error(function(data, status, headers, config) {
    alert(data.summary);
  });

  }
          else{
            $http.get('/cuenta/update/'+ cuenta.id +'?nombre=' + cuenta.nombre + '&email=' +  cuenta.email ).success(function(data) {
              $scope.displayForm = '';
              removeModal();
            }).
  error(function(data, status, headers, config) {
    alert(data.summary);
  });
          }
        };
 
$scope.editItem = function (data) {       
        $scope.cuenta = data;
        $scope.displayForm = true;
}
 
        $scope.removeItem = function (data) {
          if (confirm('Do you really want to delete?')){
            $http['delete']('/cuenta/' + data.id).success(function() {
              $scope.items.splice($scope.items.indexOf(data), 1);
            });
          }
        };
 
        $http.get('/cuenta/find').success(function(data) {
          for (var i = 0; i < data.length; i++) {
            data[i].index = i;
          }
          $scope.items = data;
        });
 
        function removeModal(){
          $('.modal').modal('hide');          
      }
 
    }];
});