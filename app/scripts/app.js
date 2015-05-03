'use strict';

/**
 * @ngdoc overview
 * @name satubahasaApp
 * @description
 * # satubahasaApp
 *
 * Main module of the application.
 */
var app = angular
  .module('satubahasaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      });
  }).constant('FIREBASE_URL','https://kibar.firebaseio.com/');
