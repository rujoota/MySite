'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  /*'myApp.home',
  'myApp.projects',
  'myApp.blog',
  'myApp.photos',*/
  'myApp.version'
]).
    config(function($stateProvider,$urlRouterProvider){
      $urlRouterProvider.otherwise("");
      $stateProvider.state("index", {
            url: "",
            views: {
              'about': {
                templateUrl: 'home/home.html',
                controller: "HomeCtrl",
                controllerAs: "HomeCtrl"
              },
              'projects': {
                templateUrl: 'projects/projects.html',
                controller: "ProjectCtrl",
                controllerAs: "ProjectCtrl"
              },
              'blog': {
                templateUrl: 'blog/blog.html',
                controller: "BlogCtrl",
                controllerAs: "BlogCtrl"
              },
              'photos': {
                templateUrl: 'photos/photos.html',
                controller: "PhotosCtrl",
                controllerAs: "PhotosCtrl"
              },
                'contact': {
                    templateUrl: 'contact/contact.html',
                    controller: "ContactCtrl",
                    controllerAs: "ContactCtrl"
                }
            }
          }
      );
})
    .controller('HomeCtrl', function($scope,$http) {

    })
    .controller('ProjectCtrl', function($scope,$http) {
      $http.get( "allProjects").success(function( data ) {
        $scope.projects=data;
      });

    })
    .controller('BlogCtrl', function($scope,$http) {
        $http.get( "allBlogs").success(function( data ) {
            $scope.blogs=data;
        });
    })
    .controller('PhotosCtrl', function($scope) {
        $scope.number = 20;
        $scope.getNumber = function(num) {
            return new Array(num);
        }
    })
    .controller('ContactCtrl', function($scope,$http) {

    });
/*config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
  //$locationProvider.html5Mode(true);
  //$routeProvider.otherwise({redirectTo: '/home'});
}]);*/
