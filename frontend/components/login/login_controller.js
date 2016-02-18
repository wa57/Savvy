angular.module('savvy')
    .controller('login_controller', login_controller)
    .$inject = ['$scope', '$state', 'authService', 'Session'];

function login_controller($scope, $state, authService, Session) {
    $scope.login = function(credentials) {
        if(credentials.email) {
            var login = authService.login(credentials);
        }

        var userData = {
            userId: "12y3u1hdshjadkas",
            name: "will",
            email: "test@test.com"
        };
        
        Session.setUserData(userData);
    };
}
