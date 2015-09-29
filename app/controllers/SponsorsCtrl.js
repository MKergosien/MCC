define([
  'angular',
  'firebase', 
  'angularRoute'
], function(angular, firebase) {
  angular.module('MCCApp.SponsorsCtrl', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/sponsors', {
        templateUrl: 'partials/Sponsors.html',
        controller: 'SponsorsCtrl'
    });
  }])
  .controller('SponsorsCtrl', ["$scope", "$q", "$firebaseArray", "$routeParams", function($scope, $q, $firebaseArray, $routeParams) {
    
     var ref = new Firebase("http://musiccitycode.firebaseio.com/Sponsors");

      $scope.Sponsors = $firebaseArray(ref);
  }]);

});