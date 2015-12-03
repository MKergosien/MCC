require.config({
  paths: {
    angularRoute: "/lib/angular-route/angular-route",
    angularfire: "/lib/angularfire/dist/angularfire.min",
    angularFilter: "/lib/angular-filter/dist/angular-filter.min",
    jquery: "/lib/jquery/dist/jquery.min",
    angular: "/lib/angular/angular.min",
    firebase: "/lib/firebase/firebase",
    bootstrap: "/lib/bootstrap/dist/js/bootstrap.min",
    babel: "/lib/requirejs-babel/babel-5.8.22.min",
    es6:"/lib/requirejs-babel/es6"
  },
  shim: {
    'angularfire': ["angular", "firebase"],
    'firebase': {"exports": "Firebse"},
    'angular': {"exports": "angular"},
    'angularFilter': ["angular"],
    'angularRoute': ["angular"],
    'bootstrap': ["jquery"]
  },
  priority: [
    "angular"
  ],
});

require([
  'bootstrap',
  'angular',
  'app'
  ], function(bootstrap, angular, app) {
    var $html = angular.element(document.getElementsByTagName('body')[0]);
    angular.element($html).ready(function() {
      // bootstrap the app manually
      angular.bootstrap(document, ['MCCApp']);
    });
  }
);