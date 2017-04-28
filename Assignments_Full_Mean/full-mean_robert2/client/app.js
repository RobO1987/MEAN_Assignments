var app = angular.module("itemsApp",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider
  .when("/new",{
    templateUrl: "/partials/new-item.html"
  })
  .when("/index",{
    templateUrl: "/partials/items-index.html"
  })
  .otherwise("/index");
});
