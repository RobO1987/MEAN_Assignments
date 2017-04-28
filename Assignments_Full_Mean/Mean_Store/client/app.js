var app = angular.module('meanStoreApp', ['ngRoute', "ngMessages", "ngCookies"]);

/////////////////////// ROUTES ///////////////////////
app.config(function($routeProvider){
  $routeProvider
  .when('/dashboard',{
    templateUrl: "./partials/dashboard.html",
    controller: "dashboardController"
  })
  .when('/products',{
    templateUrl: "./partials/products.html",
    controller: "productsController"
  })
  .when('/orders',{
    templateUrl: "./partials/orders.html",
    controller: "ordersController"
  })
  .when('/customers',{
    templateUrl: "./partials/customers.html",
    controller: "customersController"
  })
  .when('/settings',{
    templateUrl: "./partials/settings.html",
    controller: "settingsController"
  })
  .otherwise('/');
});
