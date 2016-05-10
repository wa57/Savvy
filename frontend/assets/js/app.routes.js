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
            url: '/admin/dashboard',
            templateUrl: 'frontend/components/admin/dash/dash_view.html',
            title: "Admin Dashboard",
            //requiresAuth: true,
            //authorizedRoles: ['admin']
        })

        .state('resetPassword', {
            url: '/reset_password',
            templateUrl: 'frontend/components/reset_password/reset_password.html',
            controller: 'resetPassCtrl',
            controllerAs: 'resetPass',
            title: "Reset Your Password",
        })

        .state('userInfo', {
            url: '/admin/user-info',
            templateUrl: 'frontend/components/admin/user_info/user_info_view.html',
            controller: 'userInfoCtrl',
            controllerAs: 'userInfo',
            title: 'User Information',
            //requiresAuth: true,
            //authorizedRoles: ['admin']
        })

        .state('profile', {
            url: '/profile/:username',
            templateUrl: 'frontend/components/profile/profile_view.html',
            controller: 'profileCtrl',
            controllerAs: 'profile',
            requiresAuth: true,
            authorizedRoles: ['user', 'admin'],
            title: "Profile",
            params: {
                username: {
                    value: null,
                    squash: true
                }
            }
        })

        .state('faq', {
            url: '/faq',
            templateUrl: 'frontend/components/faq/faq_view.html',
            title: "FAQs"
        })

        .state('demo', {
            url: '/demo',
            templateUrl: 'frontend/components/demo/demo_view.html',
            title: 'Demo'
        })

        .state('receipt', {
            url: '/receipt',
            templateUrl: 'frontend/components/receipt/receipt_view.html',
            title: 'Upload Receipt',
            requiresAuth: true,
            authorizedRoles: ['user', 'admin'],
        })
}]);
