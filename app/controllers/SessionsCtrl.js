define([
  'angular',
  'firebase',
  'angularRoute'
], function(angular, firebase) {
  angular.module('MCCApp.SessionsCtrl', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/schedule', {
        templateUrl: 'partials/Sessions.html',
        controller: 'SessionsCtrl'
    });
  }])
  .controller('SessionsCtrl', ["$scope", "$q", "$firebaseArray", "$routeParams", function($scope, $q, $firebaseArray, $routeParams) {
     
     var ref = new Firebase("http://musiccitycode.firebaseio.com/Sessions");

      $scope.Sessions = $firebaseArray(ref);
  }]);
});
