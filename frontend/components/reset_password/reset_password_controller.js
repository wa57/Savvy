angular.module('savvy').controller('resetPassCtrl',
['$scope', '$state', 'User',
function($scope, $state, User) {
    //username password email first_name
    //authService.createNewUser(newUserData);
    var self = this;

    self.sendPasswordResetCode = function(email) {
        User.sendPasswordResetCode(email).then(function(response) {
            console.log(response);
        });
    };

    self.resetPassword = function(reset_code, new_password) {
        User.resetPassword(reset_code, new_password).then(function(response) {
            console.log(response);
        });
    };


}]);
