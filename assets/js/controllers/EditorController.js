define(function () {
    return ['$scope', '$http', function($scope, $http) {
      
 
function resetItem(){
   $scope.editor = {
      nombre : '',
      IDCuenta: '',
      perfil: [],
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
  var editor = $scope.editor;
      if (editor.id.length == 0){
            $http.get('/editor/create?nombre=' + editor.nombre + '&perfil=' + editor.IDCuenta ).success(function(data) {
              $scope.items.push(data);
              $scope.displayForm = '';
              removeModal();
            }).
  error(function(data, status, headers, config) {
    alert(data.summary);
  });

  }
          else{
            $http.get('/editor/update/'+ editor.id +'?nombre=' + editor.nombre + '&perfil=' + editor.IDCuenta ).success(function(data) {
              $scope.displayForm = '';
              removeModal();
            }).
  error(function(data, status, headers, config) {
    alert(data.summary);
  });
          }
        };
 
$scope.editItem = function (data) {       
        $scope.editor = data;
        $scope.displayForm = true;
}
 
        $scope.removeItem = function (data) {
          if (confirm('Do you really want to delete?')){
            $http['delete']('/editor/' + data.id).success(function() {
              $scope.items.splice($scope.items.indexOf(data), 1);
            });
          }
        };
 
        $http.get('/editor/find').success(function(data) {
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