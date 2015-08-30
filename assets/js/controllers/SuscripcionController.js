define(function () {
    return ['$scope', '$http', function($scope, $http) {
      
 
function resetItem(){
   $scope.suscripcion = {
      titulo : '',
      IDMiembros: '',
      IDEditores: '',
      miembros: [],
      editores: [],
      IDEdiciones: '',
      ediciones: [],
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
  var suscripcion = $scope.suscripcion;
      if (suscripcion.id.length == 0){
            $http.get('/suscripcion/create?titulo=' + suscripcion.titulo + '&ediciones=' + suscripcion.IDEdiciones ).success(function(data) {
              $scope.items.push(data);
              $scope.displayForm = '';
              removeModal();
            }).
  error(function(data, status, headers, config) {
    alert(data.summary);
  });

  }
          else{
            $http.get('/suscripcion/update/'+ suscripcion.id +'?titulo=' + suscripcion.titulo + '&ediciones=' + suscripcion.IDEdiciones ).success(function(data) {
              $scope.displayForm = '';
              removeModal();
            }).
  error(function(data, status, headers, config) {
    alert(data.summary);
  });
          }
        };
 
$scope.editItem = function (data) {       
        $scope.suscripcion = data;
        $scope.displayForm = true;
}
 
        $scope.removeItem = function (data) {
          if (confirm('Do you really want to delete?')){
            $http['delete']('/suscripcion/' + data.id).success(function() {
              $scope.items.splice($scope.items.indexOf(data), 1);
            });
          }
        };
 
        $http.get('/suscripcion/find').success(function(data) {
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