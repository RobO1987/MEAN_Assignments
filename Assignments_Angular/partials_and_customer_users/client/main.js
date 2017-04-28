var app = angular.module("myApp",["ngRoute"]);
console.log("HELLO")

/////////////////////// ROUTES ///////////////////////
app.config(function($routeProvider){
  $routeProvider
  .when("/user", {
    templateUrl: "static/partials/customizeUsers.html"
  })
  .when("/list",{
    templateUrl: "static/partials/userList.html"
  })
  .otherwise({
    redirectTo: "/"
  });
})

/////////////////////// FACTORY ///////////////////////
app.factory("userFactory",function(){
  var factory = {};
  factory.users = [];

  factory.addUsers = function(user){
    factory.users.push(user);
  }

  factory.delete = function($index){
    factory.users.splice($index, 1)
  }

  return factory;
})


/////////////////////// CONTROLLER ///////////////////////

app.controller('CustomizeListController',function($scope,userFactory,$location){
  console.log($location)
  $scope.createUser = function(){
    userFactory.addUsers($scope.user)
    $scope.user = {};
    $location.url('/list');
  }
})

app.controller('UserListController', function($scope,userFactory){
  $scope.users = userFactory.users;
  $scope.delete = function($index){
    console.log($index)
    userFactory.delete($index);
  }
})
