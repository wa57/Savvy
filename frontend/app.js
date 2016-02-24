require('angular');

angular.module('savvy', [require('angular-ui-router')])

.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('responseObserver');
}])

.run(['$rootScope', 'User', 'events', '$state', function($rootScope, User, events, $state) {
    var isInitialized = false;
    User.getCurrentUser().then(function(response) {
        User.isRouteViewable($state);
        isInitialized = true;
    }, function(err) {
        if($state.current.requiresAuth) {
            event.preventDefault();
            $state.go('login', { event: events.notAuthorized });
        }
        isInitialized = true;
    });

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, $injector) {
        $rootScope.title = "Savvy | " + toState.title;
        if(isInitialized) {
            if(User.isAuthenticated()) {
                if(User.isRouteViewable(toState)) {

                }
            } else {
                if(toState.requiresAuth) {
                    event.preventDefault();
                    $state.go('login', { event: events.notAuthorized })
                }
            }
        }


        /*User.getCurrentUser().then(function(response) {
            console.log(response);
            if(User.isRouteViewable(toState)) {
                console.log('is it over?');
            }

        }, function(err) {
            if(toState.requiresAuth && !User.isAuthenticated()) {
                event.preventDefault();
                $state.go('login', { event: events.notAuthorized });
            }
        });*/
        /*if(toState.requiresAuth && !User.isAuthenticated()) {
            event.preventDefault();
            $state.go('login', { event: events.notAuthorized });
        } else {
            User.getCurrentUser().then(function(response) {
                console.log('we hittin this?');
                if(User.isRouteViewable(toState)) {
                    //$state.go('home');
                }
            })
        }*/

        /*User.isAuthorized(toState);
        if(!User.isAuthenticated() && toState.requiresAuth || !User.isAuthorized(toState) && toState.requiresAuth) {

        }*/

        /*console.log(toState.requiresAuth, User.isAuthenticated());
        if(toState.requiresAuth && !User.isAuthenticated()) {
            event.preventDefault();
            $state.go('login', { event: events.notAuthorized });
        } else if(User.isAuthenticated() && User.isAuthorized()) {

        } else {
            $state.go('login', )
        }*/


        /*User.isAuthenticated().then(function(authenticated) {
            if(toState.requiresAuth && !authenticated) {
                $rootScope.$broadcast(events.notAuthorized);
                $state.go('login', { event: events.notAuthorized });
            }
        });*/
        /*if(toState.requiresAuth) {
            event.preventDefault();
            User.isAuthenticated().then(function(authenticated) {
                if(!authenticated) {
                    $rootScope.$broadcast(events.notAuthorized);
                    $state.go('login', { event: events.notAuthorized });
                } else if(authenticated) {
                    $state.go(toState.name, {}, { notify: false });
                }
            });
        }*/
    });

    google.charts.load('current', {'packages':['corechart']});
}])

.constant('events', {
    logoutSuccess: 'auth-logout-success',
    loginSuccess: 'auth-login-success',
    notAuthorized: 'auth-not-authorized'
})

.constant('USER_ROLES', {
    user: 'user',
    admin: 'admin'
});

require('bulk-require')(__dirname, ['./assets/*/*.js', './components/**/*.js']);
