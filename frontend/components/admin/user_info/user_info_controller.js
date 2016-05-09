angular.module('savvy').controller('userInfoCtrl',
['$scope', '$state', 'User', '$rootScope', 'EVENTS', 'adminService', 'stringReplace', 'productService',
function($scope, $state, User, $rootScope, EVENTS, adminService, stringReplace, productService) {
    var self = this;

    function init() {
        getAllUsers();
        self.message = setMessage(null, null, false);
        self.newUser = initNewUser();
        self.newUserButton = setNewUserButton('Create New User', 'success');
        self.selectedUser = null;
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
                self.message = setMessage('User successfully created!', 'success', true);
                self.newUserButton = setNewUserButton('Create New User', 'success');
                self.showNewUser = false;
            });
        } else {
            self.message = setMessage('Please fill in all fields to create a new user', 'danger', true);
        }
    };

    self.deleteUser = function(user_id) {
        adminService.deleteUser(user_id).then(function(response) {
            getAllUsers();
            self.message = setMessage('User successfully deleted!', 'success', true);
        })
    };

    self.sendPasswordResetCode = function(email) {
        User.sendPasswordResetCode(email).then(function(response) {
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

    self.displayDetailedUserInfo = function(user) {
        self.selectedUser = user;
    };

    self.getUserPriceHistory = function(user_id) {
        User.getPriceSubmissions(user_id).then(function(userSubmissions) {
            productService.getUniqueProductsByIds(userSubmissions).then(function(mergedProducts) {
                self.selectedUser.price_history = mergedProducts;
            });
        });
    };

    self.getUserVoteHistory = function() {
        productService.getUniqueProductsByIds(self.selectedUser.voting_history).then(function(mergedProducts) {
            self.selectedUser.detailed_voting_history = mergedProducts;
        });
    };

    self.changePassword = function(user_id, new_password) {
        User.changePassword(user_id, new_password).then(function(response) {
            console.log(response);
        })
    };

    function validateNewUser(newUser) {
        var issueExists = false;
        for(var key in newUser) {
            if(newUser[key] === null) {
                issueExists = true;
            }
        }
        return issueExists;
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
