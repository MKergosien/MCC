define([
  'angular',
  'firebase',
  'angularRoute'
], function(angular, firebase) {
  angular.module('MCCApp.CrewCtrl', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/meetthecrew', {
        templateUrl: 'partials/Crew.html',
        controller: 'CrewCtrl'
    });
  }])
  .controller('CrewCtrl', ["$scope", "$q", "$firebaseArray", "$routeParams", function($scope, $q, $firebaseArray, $routeParams) {
    
      var ref = new Firebase("http://musiccitycode.firebaseio.com/Crew");

      $scope.Crew = $firebaseArray(ref);

  }]);
});
