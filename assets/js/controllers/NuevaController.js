define(function () {
    return ['$scope', '$route', '$routeParams', '$http', '$window', '$log', '$location', function($scope, $route, $routeParams, $http, $window, $log, $location) {
      var searchObject = $location.search();

      var profileid= searchObject.profileid;

      $scope.revista = {
      titulo : '',
      id : '',

   };
 
function resetItem(){
   $scope.revista = {
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
  var revista = $scope.revista;
      if (revista.id.length == 0){
            $http.get('/revista/create?titulo=' + revista.titulo ).success(function(data) {
              $scope.items.push(data);
              $scope.displayForm = '';
              removeModal();
              $window.location.href = '/app/iniciar#?edicionid='+data.id +'&cuenta='+ profileid;
            }).
  error(function(data, status, headers, config) {
    alert(data.summary);
  });

  }
          else{
            $http.get('/revista/update/'+ revista.id +'?titulo=' + revista.titulo ).success(function(data) {
              $scope.displayForm = '';
              removeModal();
            }).
  error(function(data, status, headers, config) {
    alert(data.summary);
  });
          }
        };
 
$scope.editItem = function (data) {       
        $scope.revista = data;
        $scope.displayForm = true;
}
 
        $scope.removeItem = function (data) {
          if (confirm('Do you really want to delete?')){
            $http['delete']('/revista/' + data.id).success(function() {
              $scope.items.splice($scope.items.indexOf(data), 1);
            });
          }
        };
 
        $http.get('/revista/find').success(function(data) {
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