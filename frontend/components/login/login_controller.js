angular.module('savvy').controller('loginCtrl',
['$scope', '$state', 'User', '$rootScope', 'EVENTS', '$stateParams',
function($scope, $state, User, $rootScope, EVENTS, $stateParams) {
    var self = this;
    (function(){
        self.events = {
            notAuthenticated: $state.params.event
        }
    })()
    console.log($state.params);
    self.login = function(credentials) {
        if(credentials.username) {
            User.login(credentials).then(function(response) {
                console.log($stateParams);
                $state.go($stateParams.redirectUrl);
            });
        }
    };

    $rootScope.$on(EVENTS.logoutSuccess, function() {
        self.events.logoutSuccess = true;
    });

    $rootScope.$on(EVENTS.notAuthorized, function() {
        self.events.notAuthorized = true;
    });

    $rootScope.$on(EVENTS.notAuthenticated, function() {
        self.events.notAuthenticated = true;
    });
}]);
