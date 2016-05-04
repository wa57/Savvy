angular.module('savvy').controller('userInfoCtrl',
['$scope', '$state', 'User', '$rootScope', 'EVENTS', 'adminService',
function($scope, $state, User, $rootScope, EVENTS, adminService) {
    var self = this;

    function init() {

    }

    init();

    self.deleteUser = function(user_id) {
        adminService.deleteUser(user_id).then(function(response) {
            removeUser(user_id);
        })
    };

    self.sendResetCode = function(email) {
        User.sendResetCode(email).then(function(response) {
            
        });
    };

    function removeUser(user_id) {
        for(var i = 0; i < self.allUsers.length; i++) {
            if(user_id === self.allUsers[i].user_id) {
                self.allUsers.splice(i, 1);
            }
        }
    }

    adminService.getAllUsers().then(function(allUsers){
        self.allUsers = allUsers;
        console.log(self.allUsers);
    });


}]);
