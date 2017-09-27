    (function() {
        'use strict';
    angular
    .module('app', ['ui.router'])
    .config(config); 
    
    function config ($stateProvider, $urlRouterProvider, $httpProvider) {
    
            $urlRouterProvider.otherwise('/');
    
            $stateProvider
                .state('/', {
                    url: '/',
                    templateUrl: 'js/home/home.html',
                    controller: 'homeCtrl',
                    controllerAs: 'vm'
                })
    
        };
    })(); // end of iife
    