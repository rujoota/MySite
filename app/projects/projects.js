'use strict';
var myMap = new Map();
angular.module('myApp.projects', ['ui.router'])
    .config(function($stateProvider){
        $stateProvider.state(
            "projects",{
                url:"/projects",
                templateUrl:"projects/projects.html",
                controller:"ProjectCtrl",
                controllerAs:"ProjectCtrl"
            }
        );
    })
    /*.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projects/projects.html',
    controller: 'ProjectCtrl'
  });
}])*/
.controller('ProjectCtrl', function($scope,$http) {


      $http.get( "allProjects").success(function( data ) {
        $scope.projects=data;
      });

    });