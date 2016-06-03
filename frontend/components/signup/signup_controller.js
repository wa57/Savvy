angular.module('savvy').controller('signupCtrl',
['$scope', '$state', 'User',
function($scope, $state, User) {
    //username password email first_name
    //authService.createNewUser(newUserData);
    var self = this;

    $scope.createUser = function(userData) {
        User.createUser(userData)
            .then(function(response) {
                return User.login(userData);
            });
    };

    self.compareInput = function(input, confirm) {
        var valid = (input === confirm) && input;
        if((input === confirm) && input) {
            return true;
        }
        return false;
    };


}]);
