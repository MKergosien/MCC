define([
  'angular',
  'angularRoute'
], function(angular) {
  angular.module('MCCApp.GeekJamCtrl', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/geekjam', {
        templateUrl: 'partials/GeekJam.html',
        controller: 'GeekJamCtrl'
    });
  }])
  .controller('GeekJamCtrl', ["$scope", "$q", "$firebaseObject", "$routeParams", function($scope, $q, $firebaseObject, $routeParams) {
    
  }]);
});
