'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.home',
  'myApp.projects',
  'myApp.blog',
  'myApp.photos',
  'myApp.version'
]).
    config(function($stateProvider,$urlRouterProvider){
      $urlRouterProvider.otherwise("/home");
      
});
/*config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
  //$locationProvider.html5Mode(true);
  //$routeProvider.otherwise({redirectTo: '/home'});
}]);*/
