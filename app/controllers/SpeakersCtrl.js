define([
  'angular',
  'firebase',
  'angularRoute'
], function(angular, firebase) {
  angular.module('MCCApp.SpeakersCtrl', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/speakers', {
        templateUrl: 'partials/Speakers.html',
        controller: 'SpeakersCtrl'
    });
  }])
  .controller('SpeakersCtrl', ["$scope", "$q", "$firebaseArray", "$routeParams", function($scope, $q, $firebaseArray, $routeParams) {
      
      var ref = new Firebase("http://musiccitycode.firebaseio.com/Speakers");

      $scope.Speakers = $firebaseArray(ref);
  }])
  .directive('backImg', function(){
          return function(scope, element, attrs){
              element.css({
                  'background-image': 'url(' + attrs.backImg +')',
                  'background-size' : 'cover',
                  'width': '250px',
                  'height': '250px',
                  'background-repeat': 'no-repeat',
                  'background-position': '50% 50%',
                  'border-radius': '100%'
              });
          };
      });
});
