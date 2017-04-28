app.controller('dashboardController', function($scope, storeFactory, $routeParams, $location, $route){

  storeFactory.getProducts(function(products){
    $scope.products = products;
  });

  storeFactory.getOrders(function(orders){
    $scope.orders = orders;
  })

  storeFactory.getCustomers(function(customers){
    $scope.customers = customers;
  })
});
