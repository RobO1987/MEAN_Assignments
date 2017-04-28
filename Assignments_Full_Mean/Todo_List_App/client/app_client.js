var app = angular.module('todoApp', ['ngRoute']);

/////////////////////// CLIENT SIDE ROUTES ///////////////////////
app.config(function($routeProvider){
  $routeProvider

  .when('/view',{
    templateUrl:'../partials/todolist.html',
    controller: 'viewController'
  })
  .when('/new',{
    templateUrl: '../partials/create.html',
    controller: 'createController'
  })
  .otherwise('/');
});

/////////////////////// FACTORIES ///////////////////////
app.factory('todosFactory', function($http){
  var todos = [];
  var factory = {};

  factory.allTodos = function(callback){
    $http.get('/todos').then(function(response){
      todos = response.data
      callback(todos);
    });
  }

  factory.addTodo = function(todo,callback){
    $http.post('/todos',todo).then(function(response){
      todos.push(response.data);
      callback(todos);
    });
  }
  return factory;
})

/////////////////////// CONTROLLERS ///////////////////////
app.controller('viewController', function($scope, $routeParams, $location, todosFactory){
  $scope.todos=[];

  todosFactory.allTodos(function(todos){
    $scope.todos = todos;
  })
});

app.controller('createController', function($scope, $location, todosFactory){
  $scope.todos=[];

  $scope.addTodo = function(){
    todosFactory.addTodo($scope.newTodo, function(newTodoAfterServer){
    $location.url('/view')
    })
  }
});
