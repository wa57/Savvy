var app = angular.module('savvy', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {

    $urlRouterProvider.otherwise('/');
    //$locationProvider.html5Mode(true);
    $urlMatcherFactoryProvider.strictMode(false)

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
            url: '/search/:search_term',
            templateUrl: 'templates/template_search.html',
            controller: 'searchController',
            params: {
                search_term: {
                    value: null,
                    squash: true
                }
            }
        })

        .state('submit', {
            url: '/submit',
            templateUrl: 'templates/template_submit.html',
            controller: 'submitController',
            data: {
                requireLogin: true
            }
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
