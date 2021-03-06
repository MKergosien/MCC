define([
  'angular',
  'angularRoute',
  'angularFilter',
  'angularfire',
  'controllers/HomeCtrl',
  'controllers/SpeakersCtrl',
  'controllers/SessionsCtrl',
  'controllers/SponsorsCtrl',
  'controllers/GeekJamCtrl',
  'controllers/ContactCtrl',
  'controllers/MissionCtrl',
  'controllers/CrewCtrl',
  'controllers/GalleryCtrl',
  'controllers/AuthCtrl',
  'factories/uid'


  // You must define controllers that you use for MCC here! 
], function(angular, angularRoute, angularFilter, angularfire, HomeCtrl, SpeakersCtrl, SessionsCtrl, SponsorsCtrl, GeekJamCtrl,
 ContactCtrl, MissionCtrl, CrewCtrl, GalleryCtrl, AuthCtrl, uid) {
  // Declare app level module which depends on views, and components
  return angular.module('MCCApp', [
    'ngRoute',
    'angular.filter',
    'firebase',
    'MCCApp.HomeCtrl',
    'MCCApp.SpeakersCtrl',
    'MCCApp.SessionsCtrl',
    'MCCApp.SponsorsCtrl',
    'MCCApp.GeekJamCtrl',
    'MCCApp.ContactCtrl',
    'MCCApp.MissionCtrl',
    'MCCApp.CrewCtrl',
    'MCCApp.GalleryCtrl',
    'MCCApp.AuthCtrl',
    'MCCApp.uid'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});

  }]);
});
