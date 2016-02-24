require('angular');

angular.module('savvy', [require('angular-ui-router'), require('angular-cookies')])

.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('responseObserver');
}])

.run(['$rootScope', 'User', 'events', '$state', '$stateParams', function($rootScope, User, EVENTS, $state, $stateParams) {
    /*var isInitialized = false;
    User.getCurrentUser().then(function(response) {
        console.log($state.name);
        console.log($state.authorizedRoles);
        console.log($state.get('submit').name);
        if($state.requiresAuth) {
            console.log(User.isAuthenticated());
            if(User.isAuthenticated() && !User.isAuthorized($state.authorizedRoles)) {
                event.preventDefault();
                $state.go('login', { event: EVENTS.notAuthorized });
            } else {
                event.preventDefault();
                $state.go('login', { event: EVENTS.notAuthorized })
            }
        }
        isInitialized = true;
    }, function(err) {
        if($state.current.requiresAuth) {
            event.preventDefault();
            $state.go('login', { event: EVENTS.notAuthorized });
        }
        isInitialized = true;
    });*/

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, $injector) {
        User.getCurrentUser().then(function(response) {
            if(toState.requiresAuth) {
                if(User.isAuthenticated() && !User.isAuthorized(toState.authorizedRoles)) {
                    event.preventDefault();
                    $state.go('login', { event: EVENTS.notAuthorized });
                }
            }
        }, function(err) {
            if(toState.requiresAuth) {
                event.preventDefault();
                $state.go('login', { event: EVENTS.notAuthenticated });
            }
        });

        /*if(isInitialized) {
            console.log('init');
            if(User.isAuthenticated() && toState.requiresAuth) {
                console.log('user authenticated');
                if(User.isAuthorized(toState.authorizedRoles)) {

                } else {
                    //$state.go('login', { event: EVENTS.notAuthorized });
                }
            } else {
                if(toState.requiresAuth) {
                    event.preventDefault();
                    $state.go('login', { event: EVENTS.notAuthorized })
                }
            }
        }*/
        $rootScope.title = "Savvy | " + toState.title;


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
