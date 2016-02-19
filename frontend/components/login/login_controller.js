angular.module('savvy')
    .controller('login_controller', login_controller)
    .$inject = ['$scope', '$state', 'authService'];

function login_controller($scope, $state, authService) {
    $scope.login = function(credentials) {
        if(credentials.username) {
            authService.login(credentials).then(function(response) {
                console.log(response);
            });
        }
    };
}
