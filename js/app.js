var app = angular.module('savvy', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

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
            url: '/search',
            templateUrl: 'templates/template_search.html',
            controller: 'searchController',
        })

        .state('product', {
            url: '/product/:product',
            templateUrl: 'templates/template_product.html',
            controller: 'productController'
        })

});
