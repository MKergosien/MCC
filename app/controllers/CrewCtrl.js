define([
  'angular',
  'angularRoute'
], function(angular) {
  angular.module('MCCApp.CrewCtrl', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/meetthecrew', {
        templateUrl: 'partials/Crew.html',
        controller: 'CrewCtrl'
    });
  }])
  .controller('CrewCtrl', ["$scope", "$q", "$firebaseObject", "$routeParams", function($scope, $q, $firebaseObject, $routeParams) {
    
  }]);
});
