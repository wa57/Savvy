require('angular');

angular.module('savvy', [require('angular-ui-router')])
    .constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    })
    .constant('USER_ROLES', {
        all: '*',
        admin: 'admin',
        editor: 'editor',
        guest: 'guest'
    });

angular.module('savvy').run(['$rootScope', function($rootScope){
    /*$rootScope.$on('$stateChangeStart', ['event', 'toState', 'toParams', 'fromState', function(event, toState, toParams, fromState){
        $rootScope.title = "Savvy | " + toState.title;
    }]);*/
    google.charts.load('current', {'packages':['corechart']});
}]);

require('bulk-require')(__dirname, ['./assets/*/*.js', './components/**/*.js']);
