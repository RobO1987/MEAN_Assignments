var app = angular.module('theWallApp', ['ngRoute', "ngMessages", "ngCookies"]);

/////////////////////// CLIENT SIDE ROUTES ///////////////////////
app.config(function($routeProvider){
  $routeProvider

  .when('/',{
    templateUrl:'./partials/the_wall.html',
    controller: 'wallController'
  })
  .when('/login_register',{
    templateUrl: './partials/login_register.html',
    controller: 'userController'
  })
  .otherwise('/');
});

/////////////////////// FACTORIES ///////////////////////
app.factory('userFactory', function($http){
  var factory = {};
  factory.user = null;
  factory.errors = [];

  factory.create = function(user, callback){
    $http.post('/api/users',user).then(function(response){
      if(response.data.errors){
        factory.errors.push(response.data.errors)
      }
      else{
        factory.user = {
          id:response.data._id,
          username:response.data.username
        }
      }
      callback();
    });
  }

  factory.login = function(user, callback){
    console.log('hit the factory', user)
    $http.post('/api/login',user).then(function(response){
      if(response.data.err){
        console.log("Email or Password Doesn't Exists");
        console.log(response.data);
        factory.errors.push(response.data.err)
      }
      else{
        console.log('Login factory routed to server and came back successfully');
        console.log(response.data);
        factory.user = response.data.result
      }
      callback(response.data);
    })
  }

  return factory;
})

app.factory('postFactory', function($http){
  var factory = {};
  var posts = [];

  factory.addNewPost = function(postdata,user,callback){
    postdata.userId = user.userId;
    postdata.userName = user.userName;
    $http.post('/api/posts', postdata).then(function(response){
      console.log('back from the server side')
      callback();
    })
  }

  factory.getAllPost = function(callback){
    $http.get('/api/posts').then(function(response){
      posts = response.data;
      callback(posts);
    });
  }

  factory.getAllComments = function(callback){
    $http.get('/api/comments').then(function(response){
      comments = response.data;
      callback(comments);
    })
  }

  factory.addNewComment = function(newComment, callback){
    console.log('///////////////////', newComment);
    $http.post('/api/comment', newComment).then(function(response){
      comment = response.data;
      callback(comment);
    })
  }
  return factory;
})


/////////////////////// CONTROLLERS ///////////////////////

    /////////////////////// USER CONTROLLER
app.controller('userController', function($scope, $routeParams, $location, userFactory, $cookies, $route){

  $scope.register = function(){
    if($scope.registerUser.password == $scope.registerUser.confirmpassword){
      userFactory.create($scope.registerUser, function(){

      $cookies.put('loggeduserid',userFactory.user._id);
      $cookies.put('loggedusername',userFactory.user.username);

      $location.path('/');
      })
    }
    else(console.log('something is wrong'))
  }

  $scope.login = function(){
    console.log($scope.loginUser.email, "Login Info Loaded")
    userFactory.login($scope.loginUser, function(result){
      if(result.err){
        console.log('Unsuccessful Login Attempt');
        $route.reload()
      }
      else{
      console.log('Successfully Logged In');

      $cookies.put('loggeduserid',userFactory.user._id);
      $cookies.put('loggedusername',userFactory.user.username);

      $location.path('/');
    }
  });
  }


})

    /////////////////////// WALL CONTROLLER
app.controller('wallController', function($scope,$routeParams,$location,userFactory,$cookies,postFactory, $route){
  var cookie = $cookies.get("loggedusername")
  console.log(cookie);

  if(cookie){
    var userId = $cookies.get("loggeduserid")
    var userName = $cookies.get("loggedusername")
    $scope.user = {userId:userId, userName:userName}
  }
  else{
    $location.path('/login_register')
  }

  postFactory.getAllPost(function(posts){
    console.log(posts);
    $scope.posts = posts
  });

  postFactory.getAllComments(function(comments){
    console.log(comments);
    $scope.comments = comments;
  })

  $scope.logout = function(){
    $cookies.remove("loggeduserid")
    $cookies.remove("loggedusername")
    $location.url("/login_register")
  }

  $scope.addPost = function(){
    console.log($scope.newpost)
    postFactory.addNewPost($scope.newpost, $scope.user,
    function(){
      $scope.newpost={}
      $route.reload()
    })
  }

  $scope.addComment = function(post_id,newComment){
    var comment = {
      postId: post_id,
      comment: newComment,
    };
    postFactory.addNewComment(comment, function(response){
      console.log("Successful Comment Add", response);
      $route.reload()
    })
  }
})
