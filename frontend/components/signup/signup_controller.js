angular.module('savvy')
    .controller('signup_controller', signup_controller)
    .$inject = ['$scope', '$state'];

function signup_controller($scope, $state, authService) {
    //username password email first_name
    //authService.createNewUser(newUserData);

    $scope.createUser = function(userData) {
        authService.createUser(userData).then(function(response) {
            console.log(response);
        });
    };
}
