angular.module('savvy').config(
    ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$urlMatcherFactoryProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {

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
            name: 'submit',
            templateUrl: 'frontend/components/submit/submit_view.html',
            controller: 'submitCtrl',
            controllerAs: 'submit',
            title: "Submit Price",
            authorizedRoles: ['user', 'admin'],
            requiresAuth: true,
        })

        .state('product', {
            url: '/product/:product_id',
            templateUrl: 'frontend/components/product/product_view.html',
            controller: 'product_controller',
            controllerAs: 'product',
            title: "Product Page",
            requiresAuth: true,
            authorizedRoles: ['user', 'admin'],
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
            controller: 'signupCtrl',
            controllerAs: 'signup',
            title: "Sign Up"
        })

        .state('login', {
            url: '/login',
            templateUrl: 'frontend/components/login/login_view.html',
            controller: 'loginCtrl',
            controllerAs: 'login',
            requiresAuth: false,
            params: {
                event: "",
                returnUrl: "",
                redirect: false,
            },
            title: "Login"
        })

        .state('admin', {
            url: '/',
            templateUrl: 'frontend/components/admin/admin_view.html',
            controller: 'admin_controller',
            title: "Admin"
        })

        .state('profile', {
            url: '/profile',
            templateUrl: 'frontend/components/profile/profile_view.html',
            controller: 'profileCtrl',
            controllerAs: 'profile',
            requiresAuth: true,
            authorizedRoles: ['user', 'admin'],
            title: "Profile",
            resolve: {
                userData: function(User) {
                    return User.getCurrentUser();
                }
            }
        })

        .state('faq', {
            url: '/faq',
            templateUrl: 'frontend/components/faq/faq_view.html',
            title: "FAQs"
        })
}]);
