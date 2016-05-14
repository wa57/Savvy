require('angular'); //THIS SLOWS IT DOWN SO MUCH
//require('angular-animate');

angular.module('savvy', [require('angular-ui-router'), require('angular-cookies')])

.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('responseObserver');
}])

.run(['$rootScope', 'User', 'EVENTS', '$state', '$stateParams', function($rootScope, User, EVENTS, $state, $stateParams) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, $injector) {
        User.getCurrentUser().then(function(response) {
            if(toState.requiresAuth) {
                if(User.isAuthenticated() && !User.isAuthorized(toState.authorizedRoles)) {
                    event.preventDefault();
                    $state.go('login', { event: EVENTS.notAuthorized });
                }
            } else if(toState.name === 'login' || toState.name === 'signup') {
                event.preventDefault();
                $state.go('home');
                toState.title = "Home";
            }
        }, function(err) {
            if(toState.requiresAuth) {
                event.preventDefault();
                $state.go('login', {
                    event: EVENTS.notAuthenticated,
                    returnUrl: toState.name,
                    redirect: true
                });
            }
        });
        $rootScope.title = "Savvy | " + toState.title;
    });

    google.charts.load('current', {'packages':['line']});
}])

.constant('events', {
    logoutSuccess: 'auth-logout-success',
    loginSuccess: 'auth-login-success',
    notAuthorized: 'auth-not-authorized'
})

.constant('EVENTS', {
    logoutSuccess: 'auth-logout-success',
    loginSuccess: 'auth-login-success',
    notAuthorized: 'auth-not-authorized',
    notAuthenticated: 'auth-not-authenticated',
})

.constant('USER_ROLES', {
    user: 'user',
    admin: 'admin'
});

require('bulk-require')(__dirname, ['./assets/*/*.js', './components/**/*.js']);
