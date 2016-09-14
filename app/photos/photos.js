'use strict';

angular.module('myApp.photos', ['bootstrapLightbox', 'ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/photos', {
            templateUrl: 'photos/photos.html',
            controller: 'PhotosCtrl'
        });
    }])
    .controller('PhotosCtrl', function($scope,Lightbox) {



    });