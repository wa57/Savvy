var app = angular.module('savvy', ['ui.router']);

app.run(function($rootScope){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState){
        $rootScope.title = "Savvy | " + toState.title;
    });
});

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {

    $urlRouterProvider.otherwise('/');
    $urlMatcherFactoryProvider.strictMode(false)

    $stateProvider
        /*.state('app', {
            templateUrl: 'templates/template_app.html',
            abstract: true,
        })*/
        .state('home', {
            url: '/',
            templateUrl: 'templates/template_home.html',
            controller: 'homeController',
            title: "Home"
        })
        .state('search', {
            url: '/search/:search_term',
            templateUrl: 'templates/template_search.html',
            controller: 'searchController',
            title: "Search",
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
            title: "Submit Price",
            data: {
                requireLogin: true
            }
        })
        .state('product', {
            url: '/product/:product',
            templateUrl: 'templates/template_product.html',
            controller: 'productController',
            title: "Product Page",
            params: {
                product_id: {
                    value: null,
                    squash: true
                }
            }
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'templates/template_admin.html',
            controller: 'adminController',
            title: "Admin"
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'templates/template_signup.html',
            controller: 'signUpController',
            title: "Sign Up"
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/template_login.html',
            controller: 'loginController',
            title: "Login"
        })
});
