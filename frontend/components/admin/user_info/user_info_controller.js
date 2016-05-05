angular.module('savvy').controller('userInfoCtrl',
['$scope', '$state', 'User', '$rootScope', 'EVENTS', 'adminService', 'stringReplace',
function($scope, $state, User, $rootScope, EVENTS, adminService, stringReplace) {
    var self = this;

    function init() {
        getAllUsers();
        initMessage();
        initNewUser();
    }

    init();

    self.truncateString = function(str, max, add) {
        return stringReplace.truncateString(str, max, add);
    }

    self.createUser = function(newUser) {
        if(!validateNewUser(newUser)) {
            User.createUser(newUser).then(function(response) {
                getAllUsers();
                initNewUser();
                self.displayNewUserFields(false);
                self.setMessage('User successfully created!', 'success', true);
            });
        } else {
            self.setMessage('Please fill in all fields to create a new user', 'danger', true);
        }
    };

    self.deleteUser = function(user_id) {
        adminService.deleteUser(user_id).then(function(response) {
            getAllUsers();
            self.setMessage('User successfully deleted!', 'success', true);
        })
    };

    self.sendResetCode = function(email) {
        User.sendResetCode(email).then(function(response) {
            self.setMessage('Email sent to' + email, 'success', true);
        });
    };

    self.setMessage = function(text, status, show) {
        self.message.text = text;
        self.message.status = status;
        self.message.show = show;
    };

    self.displayNewUserFields = function(display) {
        self.showNewUser = display;
        self.showCreateNewUserButton = display;
        self.showCancelNewUserButton = !display;
    };

    function validateNewUser(newUser) {
        var issueExists = false;
        for(var key in newUser) {
            if(newUser[key] === null) {
                issueExists = true;
                console.log(key);
            }
        }

        console.log(issueExists);
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

    function initMessage() {
        self.message = {};
        self.message.text = null;
        self.message.show = false;
        self.message.status = null;
    }

    function initNewUser() {
        self.newUser = {};
        self.newUser.first_name = null;
        self.newUser.email = null;
        self.newUser.username = null;
        self.newUser.password = null;
    }

}]);
