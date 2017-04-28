app.controller('customersController', function($scope, storeFactory, $routeParams, $location, $route){

storeFactory.getCustomers(function(customers){
  $scope.customers = customers;
})

$scope.addCustomer = function(){
console.log('Create function works');
  storeFactory.addCustomer($scope.newCustomer, function(response){
    console.log('Here is your response', response);
    $route.reload()
  });
}

$scope.deleteCustomer = function(id){
  storeFactory.deleteCustomer(id ,function(response){
    $route.reload()
  });
}

})
