var app = angular.module('savvy', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');
    //$locationProvider.html5Mode(true);

    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('/', {
            url: '/',
            templateUrl: 'templates/template_home.html',
            controller: 'homeController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('signup', {
            url: '/signup',
            templateUrl: 'templates/template_signup.html',
            controller: 'signUpController',
        })

        .state('login', {
            url: '/login',
            templateUrl: 'templates/template_login.html',
            controller: 'loginController',
        })

        .state('search', {
            url: '/search/:search',
            templateUrl: 'templates/template_search.html',
            controller: 'searchController',
        })

        .state('results', {
            url: '/results/:search_term',
            templateUrl: 'templates/template_results.html',
            controller: 'searchController'
        })

        .state('submit', {
            url: '/submit',
            templateUrl: 'templates/template_submit.html',
            controller: 'submitController'
        })
        .state('product', {
            url: '/product/:product',
            templateUrl: 'templates/template_product.html',
            controller: 'productController'
        })

        .state('admin', {
            url: '/admin',
            templateUrl: 'templates/template_admin.html',
            controller: 'adminController'
        })

});
