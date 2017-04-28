app.controller('productsController', function($scope, storeFactory, $routeParams, $location, $route){

  storeFactory.getProducts(function(products){
    $scope.products = products;
  })

  $scope.addProduct = function(){
    storeFactory.addProduct($scope.newProduct, function(response){
      console.log('Here is your response', response);
      $route.reload()
    });
  }

  $scope.deleteProduct = function(id){
    storeFactory.deleteProduct(id ,function(response){
      $route.reload()
    });
  }
})
