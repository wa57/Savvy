angular.module('savvy').controller('loginCtrl', ['$scope', '$state', 'User', '$rootScope',
function($scope, $state, User, $rootScope) {
    console.log($state);
    var self = this;
    (function(){
        self.events = {
            notAuthorized: $state.params.event
        }
    })()

    self.login = function(credentials) {
        if(credentials.username) {
            User.login(credentials).then(function(response) {
                console.log(response);
            });
        }
    };

    $rootScope.$on('auth-logout-success', function() {
        self.events.logoutSuccess = true;
    });

    $rootScope.$on('auth-not-authorized', function() {
        self.events.notAuthorized = true;
    });
}]);
