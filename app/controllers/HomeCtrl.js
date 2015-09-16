define([
  'angular',
  'angularRoute'
], function(angular) {
  angular.module('MCCApp.HomeCtrl', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'partials/Home.html',
        controller: 'HomeCtrl'
    });
  }])
  .controller('HomeCtrl', ["$scope", "$q", "$firebaseObject", "$routeParams", function($scope, $q, $firebaseObject, $routeParams) {
    
  }]);
});
