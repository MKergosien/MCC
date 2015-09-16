define([
  'angular',
  'angularRoute'
], function(angular) {
  angular.module('MCCApp.ContactCtrl', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/contactus', {
        templateUrl: 'partials/Contact.html', 
        controller: 'ContactCtrl'
    });
  }])
  .controller('ContactCtrl', ["$scope", "$q", "$firebaseObject", "$routeParams", function($scope, $q, $firebaseObject, $routeParams) {
    
  }]);
});
