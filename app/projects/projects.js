'use strict';

angular.module('myApp.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projects/projects.html',
    controller: 'ProjectCtrl'
  });
}])

    .controller('ProjectCtrl', function($scope,$http) {


      $http.get( "projects123").success(function( data ) {
        $scope.projects=data;
      });
    });