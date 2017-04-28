app.controller('ordersController', function($scope, storeFactory, $routeParams, $location, $route){


  storeFactory.getProducts(function(products){
    $scope.products = products;
  })

  storeFactory.getCustomers(function(customers){
    $scope.customers = customers;
  })

  storeFactory.getOrders(function(orders){
    $scope.orders = orders;
  })

  $scope.createOrder = function(){
    storeFactory.createOrder($scope.newOrder, function(response){
      console.log("Here is your response", response);
      $route.reload()
    });
  }

  $scope.deleteOrder = function(id){
    console.log(id)
    storeFactory.deleteOrder(id, function(response){
      console.log("Here is your response", response);
      $route.reload()
    })
  }
})
