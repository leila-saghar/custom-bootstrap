(function () {
    'use strict';


    angular.module('app', [
        'ui.router', 'ngTable'
    ])
        .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
          // route for the home page
          .state('home', {
              url: '/',
              templateurl: 'index.html',
              controller: 'homeCtrl',
              controllerAs: 'vm'

          })
            .state('customers', {
                url: '/customers',
                templateUrl: 'app/views/customers.html',
                controller: 'customersCtrl',
                controllerAs: 'vm'
            });
        //  .state('about', {
        //      url: '/about',
        //      templateUrl: 'app/views/about.html',
        //      //controller: 'homectrl',
        //      //controllerAs: 'vm'
        //  })
        //  .state('contact', {
        //      url: '/contact',
        //      templateUrl: 'app/views/contact.html',
        //      //controller: 'homectrl',
        //      //controllerAs: 'vm'
        //  })          
        //.state('customerDetails', {
        //    url: '/customerDetails',
        //    templateUrl: 'app/views/details.html',
        //    controller: 'detailsCtrl',
        //    controllerAs: 'vm'
        //});


    }]);

})();