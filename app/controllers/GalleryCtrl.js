define([
  'angular',
  'angularRoute'
], function(angular) {
  angular.module('MCCApp.GalleryCtrl', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/gallery', {
        templateUrl: 'partials/Gallery.html',
        controller: 'GalleryCtrl'
    });
  }])
  .controller('GalleryCtrl', ["$scope", "$q", "$firebaseObject", "$routeParams", function($scope, $q, $firebaseObject, $routeParams) {
    
  }]);
});
