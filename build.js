({
  baseUrl: "./app",
  paths: {
    angularRoute: "../lib/bower_components/angular-route/angular-route",
    angularfire: "../lib/bower_components/angularfire/dist/angularfire.min",
    angularFilter: "../lib/bower_components/angular-filter/dist/angular-filter.min",
    jquery: "../lib/bower_components/jquery/dist/jquery.min",
    angular: "../lib/bower_components/angular/angular.min",
    firebase: "../lib/bower_components/firebase/firebase",
    bootstrap: "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    babel: "../lib/bower_components/requirejs-babel/babel-5.8.22.min",
    es6:"../lib/bower_components/requirejs-babel/es6"
  },
  shim: {
    'angularfire': ["angular", "firebase"],
    'firebase': {"exports": "Firebse"},
    'angular': {"exports": "angular"},
    'angularFilter': ["angular"],
    'angularRoute': ["angular"],
    'bootstrap': ["jquery"]
  },
  name: "app",
  out: "main-built.js"
})  