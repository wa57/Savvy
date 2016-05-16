angular.module('savvy').controller('resetPassCtrl',
['$scope', '$state', 'User', '$stateParams',
function($scope, $state, User, $stateParams) {
    //username password email first_name
    //authService.createNewUser(newUserData);
    var self = this;
    self.message = setMessage(null, null, false);
    if($stateParams.reset_code !== null && $stateParams.reset_code) {
        self.reset_code = $stateParams.reset_code;
    }

    self.sendPasswordResetCode = function(email) {
        User.sendPasswordResetCode(email).then(function(response) {
            self.message = setMessage('Password reset code sent to ' + email, 'success', true);
        });
    };

    self.resetPassword = function(reset_code, new_password) {
        User.resetPassword(reset_code, new_password).then(function(response) {
            self.message = setMessage('Password successfully reset!', 'success', true);
        });
    };

    function setMessage(text, status, show) {
        var message = {};
        message.text = text;
        message.status = status;
        message.show = show;
        return message;
    }


}]);
