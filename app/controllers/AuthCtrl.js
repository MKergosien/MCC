define([
  "angular",
  "firebase",
  "angularRoute"
], function(angular, firebase, route) {
  angular
  .module("MCCApp.AuthCtrl", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/login", {
      templateUrl: "partials/auth.html",
      controller: "AuthCtrl",
    });
  }])
  .controller("AuthCtrl", ["$scope", "$firebaseAuth", "$firebaseArray", "uid",
    function($scope, $firebaseAuth, $firebaseArray, uid) {
      var authRef = new Firebase("https://musiccitycode.firebaseio.com/");
      var userRef = new Firebase("https://musiccitycode.firebaseio.com/users/");
      var usersArr = $firebaseArray(userRef);
      var currentUID = "";
      var goTo = "";

      $scope.signUp = function() {
        authRef.createUser({
          email: $scope.email,
          password : $scope.password
        }, function(error, userData) {
          if (error) {
            console.log("Error creating user:", error);
          } else {
            console.log("Successfully created user account with uid:", userData.uid);
            alert("User account created! You may now log in.");
          }
        });
      };

      $scope.logIn = function() {
        authRef.authWithPassword({
          email: $scope.email,
          password: $scope.password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
            currentUID = authData.uid;
            uid.setUid(currentUID);
            for (var i = 0; i < usersArr.length; i++) {
              if(usersArr[i].uid === currentUID) {
                goTo = "game";
                break;
              } else {
                goTo = "username";
              }
            }
            if(goTo !== "") {
              window.location = "#/" + goTo + "/";
            }
          }
        });
      };
      
      $scope.serviceAuth = function(service) {
        authRef.authWithOAuthPopup(service, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
            currentUID = authData.uid;
            uid.setUid(currentUID);
            for (var i = 0; i < usersArr.length; i++) {
              if(usersArr[i].uid === currentUID) {
                goTo = "game";
                break;
              } else {
                goTo = "username";
              }
            }
            if(goTo !== "") {
              window.location = "#/" + goTo + "/";
            }
          }
        });
      };

    }
  ]);
});

