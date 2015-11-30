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
            controller: 'homeController',
            display_name: "Home"
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('signup', {
            url: '/signup',
            templateUrl: 'templates/template_signup.html',
            controller: 'signUpController',
            display_name: "Sign Up"
        })

        .state('login', {
            url: '/login',
            templateUrl: 'templates/template_login.html',
            controller: 'loginController',
            display_name: "Login"
        })

        .state('search', {
            url: '/search/:search_term',
            templateUrl: 'templates/template_search.html',
            controller: 'searchController',
            display_name: "Search",
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
            display_name: "Submit Price",
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
