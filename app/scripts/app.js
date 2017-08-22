'use strict';

/**
 * @ngdoc overview
 * @name hotelsApp
 * @description
 * # hotelsApp
 *
 * Main module of the application.
 */
angular
    .module('hotelsApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ui.bootstrap'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    });