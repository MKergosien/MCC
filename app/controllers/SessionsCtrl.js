define([
  'angular',
  'angularRoute'
], function(angular) {
  angular.module('MCCApp.SessionsCtrl', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/sessions', {
        templateUrl: 'partials/Sessions.html',
        controller: 'SpeakersCtrl'
    });
  }])
  .controller('SessionsCtrl', ["$scope", "$q", "$firebaseObject", "$routeParams", function($scope, $q, $firebaseObject, $routeParams) {
    
  }]);
});
