angular.module('savvy').controller('userInfoCtrl',
['$scope', '$state', 'User', '$rootScope', 'EVENTS', 'adminService', 'stringReplace',
function($scope, $state, User, $rootScope, EVENTS, adminService, stringReplace) {
    var self = this;

    function init() {
        getAllUsers();
        self.message = setMessage(null, null, false);
        self.newUser = initNewUser();
        self.newUserButton = setNewUserButton('Create New User', 'success');
    }

    init();

    self.truncateString = function(str, max, add) {
        return stringReplace.truncateString(str, max, add);
    }

    self.isAdmin = function(user) {
        return User.isAdmin(user);
    };

    self.createUser = function(newUser) {
        if(!validateNewUser(newUser)) {
            User.createUser(newUser).then(function(response) {
                getAllUsers();
                self.newUser = initNewUser();
                //self.displayNewUserFields(false);
                self.message = setMessage('User successfully created!', 'success', true);
            });
        } else {
            self.setMessage('Please fill in all fields to create a new user', 'danger', true);
        }
    };

    self.deleteUser = function(user_id) {
        adminService.deleteUser(user_id).then(function(response) {
            getAllUsers();
            self.message = self.setMessage('User successfully deleted!', 'success', true);
        })
    };

    self.sendResetCode = function(email) {
        User.sendResetCode(email).then(function(response) {
            self.message = setMessage('Password reset code sent to ' + email, 'success', true);
        });
    };

    self.displayNewUserFields = function() {
        if(self.newUserButton.status === 'success') {
            self.newUserButton = setNewUserButton('Cancel Create New User', 'danger');
            self.showNewUser = true;
        } else if(self.newUserButton.status === 'danger') {
            self.newUserButton = setNewUserButton('Create New User', 'success');
            self.showNewUser = false;
        }
        self.newUser = initNewUser();
    };

    function validateNewUser(newUser) {
        var issueExists = false;
        for(var key in newUser) {
            if(newUser[key] === null) {
                issueExists = true;
                console.log(key);
            }
        }
        return issueExists;
    }

    function removeUser(user_id) {
        for(var i = 0; i < self.allUsers.length; i++) {
            if(user_id === self.allUsers[i].user_id) {
                self.allUsers.splice(i, 1);
            }
        }
    }

    function getAllUsers() {
        adminService.getAllUsers().then(function(allUsers){
            self.allUsers = allUsers;
            console.log(self.allUsers);
        });
    }

    function setMessage(text, status, show) {
        var message = {};
        message.text = text;
        message.status = status;
        message.show = show;
        return message;
    }

    function setNewUserButton(text, status) {
        var button = {};
        button.text = text;
        button.status = status;
        return button;
    }

    function initNewUser() {
        var newUser = {};
        newUser.first_name = null;
        newUser.email = null;
        newUser.username = null;
        newUser.password = null;
        return newUser;
    }

}]);
