define([
  'angular',
  'angularRoute'
], function(angular) {
  angular.module('MCCApp.MissionCtrl', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/missionstatement', {
        templateUrl: 'partials/Mission.html',
        controller: 'MissionCtrl'
    });
  }])
  .controller('MissionCtrl', ["$scope", "$q", "$firebaseObject", "$routeParams", function($scope, $q, $firebaseObject, $routeParams) {
    
  }]);
});
