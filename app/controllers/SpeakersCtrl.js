define([
  'angular',
  'angularRoute'
], function(angular) {
  angular.module('MCCApp.SpeakersCtrl', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/speakers', {
        templateUrl: 'partials/Speakers.html',
        controller: 'SpeakersCtrl'
    });
  }])
  .controller('SpeakersCtrl', ["$scope", "$q", "$firebaseObject", "$routeParams", function($scope, $q, $firebaseObject, $routeParams) {
    
  }]);
});
