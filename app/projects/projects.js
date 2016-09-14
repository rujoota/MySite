'use strict';
var myMap = new Map();
angular.module('myApp.projects', ['bootstrapLightbox','ngSanitize', 'ngRoute'])
    .config(function (LightboxProvider) {
        // set a custom template
        LightboxProvider.templateUrl = '/projects/demo2-lightbox-modal.html';

        // set the caption of each image as its text color
        LightboxProvider.getImageCaption = function (imageUrl) {
            //return '#' + imageUrl.match(/00\/(\w+)/)[1];
            return myMap.get(imageUrl);
        };

        // increase the maximum display height of the image
        LightboxProvider.calculateImageDimensionLimits = function (dimensions) {
            return {
                'maxWidth': dimensions.windowWidth >= 768 ? // default
                dimensions.windowWidth - 92 :
                dimensions.windowWidth - 52,
                'maxHeight': 1600                           // custom
            };
        };

        // the modal height calculation has to be changed since our custom template is
        // taller than the default template
        LightboxProvider.calculateModalDimensions = function (dimensions) {
            var width = Math.max(400, dimensions.imageDisplayWidth + 32);
            console.log(width);
            if (width >= dimensions.windowWidth - 20 || dimensions.windowWidth < 768) {
                width = 'auto';
            }

            return {
                'width': width,                             // default
                'height': 'auto'                            // custom
            };
        };
    })
    .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projects/projects.html',
    controller: 'ProjectCtrl'
  });
}])
.controller('ProjectCtrl', function($scope,Lightbox) {


      /*$http.get( "projects123").success(function( data ) {
        $scope.projects=data;
      });*/
        $scope.images = [
            '../imgs/projects/proj_attendance.png',
            'http://lorempizza.com/500/400',
            'http://lorempizza.com/600/300',
            'http://lorempizza.com/500/500',
            'http://lorempizza.com/500/700',
            'http://lorempizza.com/1000/200',
            'http://lorempizza.com/400/800',
            'http://lorempizza.com/300/500',
            'http://lorempizza.com/200/1000',
            'http://lorempizza.com/300/300',
        ];
        myMap.set('../imgs/projects/proj_attendance.png','/projects/attendance.html');
        myMap.set('../imgs/projects/proj_attendance.png','/projects/attendance.html');

        $scope.openLightboxModal = function (images) {
            Lightbox.openModal(images, 0,{size:'lg'});
        };
    });