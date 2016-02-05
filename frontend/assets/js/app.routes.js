app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {

    $urlRouterProvider.otherwise('/');
    $urlMatcherFactoryProvider.strictMode(false);

    // use the HTML5 History API
    //$locationProvider.html5Mode(true);

    $stateProvider
        /*.state('app', {
            templateUrl: 'templates/template_app.html',
            abstract: true,
        })*/
        .state('home', {
            url: '/',
            templateUrl: 'frontend/components/home/home_view.html',
            controller: 'home_controller',
            title: "Home"
        })
        .state('search', {
            url: '/search/:search_term',
            templateUrl: 'frontend/components/search/search_view.html',
            controller: 'search_controller',
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
            templateUrl: 'frontend/components/submit/submit_view.html',
            controller: 'submit_controller',
            title: "Submit Price",
            data: {
                requireLogin: true
            }
        })
        .state('product', {
            url: '/product/:product_id',
            templateUrl: 'frontend/components/product/product_view.html',
            controller: 'product_controller',
            title: "Product Page",
            params: {
                product_id: {
                    value: null,
                    squash: true
                }
            }
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'frontend/components/signup/signup_view.html',
            controller: 'signup_controller',
            title: "Sign Up"
        })
        .state('login', {
            url: '/login',
            templateUrl: 'frontend/components/login/login_view.html',
            controller: 'login_controller',
            title: "Login"
        })
});
