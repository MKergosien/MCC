define([
  'angular',
  'angularRoute'
], function(angular) {
  angular.module('MCCApp.SponsorsCtrl', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/sponsors', {
        templateUrl: 'partials/Sponsors.html',
        controller: 'SponsorsCtrl'
    });
  }])
  .controller('SponsorsCtrl', ["$scope", "$q", "$firebaseObject", "$routeParams", function($scope, $q, $firebaseObject, $routeParams) {
    
  }]);
});
