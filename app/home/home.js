'use strict';

angular.module('myApp.home', ['ngRoute'])

    /*.config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
      });
    }])*/
    .config(function($stateProvider){
        $stateProvider.state(
            "home",{
                url:"/home",
                templateUrl:"home/home.html",
                controller:"HomeCtrl",
                controllerAs:"HomeCtrl"
            }
        )
    })
    .controller('HomeCtrl', function($scope,$http) {

    })
    .controller('ProjectCtrl', function($scope,$http) {


        $http.get( "allProjects").success(function( data ) {
            $scope.projects=data;
        });

    });