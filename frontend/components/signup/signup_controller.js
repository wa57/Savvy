angular.module('savvy')
    .controller('signup_controller', signup_controller)
    .$inject = ['$scope', '$state', 'User'];

function signup_controller($scope, $state, User) {
    //username password email first_name
    //authService.createNewUser(newUserData);

    $scope.createUser = function(userData) {
        User.createUser(userData).then(function(response) {
            console.log(response);
        });
    };
}
