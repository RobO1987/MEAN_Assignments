var app = angular.module("RobertApp",["ngRoute","ngMessages"]);
console.log("App.js Client Server Initialized");

/////////////////////// ROUTES ///////////////////////

app.config(function($routeProvider){
  $routeProvider
  .when("/associations",{
    templateUrl: "static/partials/associations.html"
  })
  .when("/players",{
    templateUrl: "static/partials/players.html"
  })
  .when("/teams",{
    templateUrl: "static/partials/teams.html"
  })
  .when("/:teamname",{
    templateUrl: "static/partials/team.html"
  })
  .otherwise({
    redirectTo:"/"
  });
})

/////////////////////// FACTORY ///////////////////////

  ////PLAYER FACTORY
app.factory("playerFactory",function(){
  var players = [
    {name:"Robert", team:"49ers"},
    {name:"Kelsey", team:"Bears"},
    {name:"Jude", team:"FrenchBulldogs"}
  ];
  //Creates an empy object to hold all the following functions.
  var factory = {}

  factory.getPlayers = function(callback){
    callback(players);
  }

  factory.addPlayer = function(player){
    player.team = "";
    players.push(player);
  }

  factory.removePlayer = function($index){
    players.splice($index,1);
  }

  factory.addPlayerToTeam = function(data){
    console.log(data)
    players[data.playerIdx].team = data.team;
  }

  factory.removePlayerFromTeam = function($index){
    players[$index].team = "";
  }

  return factory;
})

  ////TEAMS FACTORY
app.factory("teamFactory",function(){
  var teams = [
    {name: 'Penguins'},
    {name: 'Sharks'},
    {name: 'Ducks'}
  ];

  var factory = {};

  factory.getTeams = function(callback){
    callback(teams);
  }

  factory.addTeam = function(team){
    teams.push(team)
  }

  factory.removeTeam = function($index){
    console.log($index);
    teams.splice($index,1);
  }

  return factory;
})


////////////////// CONTROLLER ///////////////////

  ////PLAYER CONTROLLER
app.controller("playersController", function($scope, playerFactory){
  $scope.players = [];

  playerFactory.getPlayers(function(players){
    $scope.players = players;
  })
  $scope.addPlayer = function(){
    playerFactory.addPlayer($scope.newPlayer)
    $scope.newPlayer = {};
  }
  $scope.removePlayer = function($index){
    playerFactory.removePlayer($index);
  }
})
  ////TEAMS CONTROLLER
app.controller("teamsController", function($scope, teamFactory){
  $scope.teams = [];

  teamFactory.getTeams(function(teams){
    $scope.teams = teams;
  })

  $scope.addTeam = function(){
    teamFactory.addTeam($scope.newTeam)
    $scope.newTeam = {};
  }

  $scope.removeTeam = function($index){
    teamFactory.removeTeam($index)
  }
})
  ////ASSOCIATIONS CONTROLLER
app.controller("associationsController", function($scope, teamFactory, playerFactory){
  $scope.players = [];
  $scope.teams = [];

  playerFactory.getPlayers(function(players){
    $scope.players = players;
  })

  teamFactory.getTeams(function(teams){
    $scope.teams = teams;
  })

  $scope.addPlayerToTeam = function(){
    playerFactory.addPlayerToTeam($scope.newAssoc);
  }

  $scope.removePlayerFromTeam = function($index){
    playerFactory.removePlayerFromTeam($index);
  }
})
  ////TEAM CONTROLLER

app.controller('teamController', function(teamFactory, $routeParams){
 console.log($routeParams)
})
