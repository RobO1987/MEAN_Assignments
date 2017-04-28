var app = angular.module('{{APPNAME}}', ['ngRoute']);

/////////////////////// CLIENT SIDE ROUTES ///////////////////////
app.config(function($routeProvider){
  $routeProvider

  .when('/view',{
    templateUrl:'../partials/{{PARTIAL_1}}.html',
    controller: 'viewController'
  })
  .when('/new',{
    templateUrl: '../partials/{{PARTIAL_2}}.html',
    controller: 'createController'
  })
  .otherwise('/');
});

/////////////////////// FACTORIES ///////////////////////
app.factory('{{REPLACE}}Factory', function($http){
  var {{REPLACE}} = [];
  var factory = {};

  factory.all{{REPLACE}} = function(callback){
    $http.get('/{{REPLACE}}').then(function(response){
      {{REPLACE}} = response.data
      callback({{REPLACE}});
    });
  }

  factory.add{{REPLACE}} = function(todo,callback){
    $http.post('/{{REPLACE}}',todo).then(function(response){
      {{REPLACE}}.push(response.data);
      callback({{REPLACE}});
    });
  }
  return factory;
})

/////////////////////// CONTROLLERS ///////////////////////
app.controller('viewController', function($scope, $routeParams, $location, {{REPLACE}}Factory){
  $scope.{{REPLACE}}=[];

  {{REPLACE}}Factory.allTodos(function({{REPLACE}}){
    $scope.{{REPLACE}} = {{REPLACE}};
  })
});

app.controller('createController', function($scope, $location, {{REPLACE}}Factory){
  $scope.{{REPLACE}}=[];

  $scope.addTodo = function(){
    {{REPLACE}}Factory.addTodo($scope.newTodo, function({{REPLACE}}){
    $location.url('/view')
    })
  }
});
