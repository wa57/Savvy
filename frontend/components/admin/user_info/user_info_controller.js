angular.module('savvy').controller('userInfoCtrl',
['$scope', '$state', 'User', '$rootScope', 'EVENTS', 'adminService', 'stringReplace', 'productService',
function($scope, $state, User, $rootScope, EVENTS, adminService, stringReplace, productService) {
    var self = this;

    function init() {
        getAllUsers();
        self.loaders = initLoaders();
        self.message = initMessages();
        self.newUser = initNewUser();
        self.newUserButton = setNewUserButton('Create New User', 'success');
        self.selectedUser = null;
    }

    init();

    self.truncateString = function(str, max, add) {
        return stringReplace.truncateString(str, max, add);
    }

    self.isAdmin = function(user) {
        if(user !== null) {
            return User.isAdmin(user);
        }
    };

    self.toggleAdmin = function(user) {
        console.log(user);
    };

    self.createUser = function(newUser) {
        if(!validateNewUser(newUser)) {
            User.createUser(newUser).then(function(response) {
                getAllUsers();
                self.newUser = initNewUser();
                self.message.table = setMessage('User successfully created!', 'success', true);
                self.newUserButton = setNewUserButton('Create New User', 'success');
                self.showNewUser = false;
            });
        } else {
            self.message.table = setMessage('Please fill in all fields to create a new user', 'danger', true);
        }
    };

    self.deleteUser = function(user_id) {
        adminService.deleteUser(user_id).then(function(response) {
            getAllUsers();
            self.message.table = setMessage('User successfully deleted!', 'success', true);
        })
    };

    self.sendPasswordResetCode = function(email) {
        User.sendPasswordResetCode(email).then(function(response) {
            self.message.table = setMessage('Password reset code sent to ' + email, 'success', true);
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
        displayLoader('dataTable', false);
    };

    self.getDataTable = function(selectedUser) {
        displayLoader('saveChanges', false);
        switch(selectedUser.dataTableOption) {
            case 'priceHistory':
                if(!('price_history' in selectedUser)) {
                    displayLoader('dataTable', true);
                    self.getUserPriceHistory(selectedUser.user_id);
                }
                break;
            case 'voteHistory':
                if(!('detailed_voting_history' in selectedUser)) {
                    displayLoader('dataTable', true);
                    self.getUserVoteHistory(selectedUser.voting_history);
                }
                break;
        };
    };

    self.getUserPriceHistory = function(user_id) {
        User.getPriceSubmissions(user_id).then(function(userSubmissions) {
            if(userSubmissions.length > 0) {
                productService.getUniqueProductsByIds(userSubmissions, 5).then(function(mergedProducts) {
                    self.selectedUser.price_history = mergedProducts;
                    displayLoader('dataTable', false);
                });
            }
        });
    };

    self.getUserVoteHistory = function(votingHistory) {
        productService.getUniqueProductsByIds(votingHistory).then(function(mergedProducts) {
            self.selectedUser.detailed_voting_history = mergedProducts;
            displayLoader('dataTable', false);
        });
    };

    self.changePassword = function(user_id, new_password) {
        User.changePassword(user_id, new_password).then(function(response) {
            console.log(response);
        })
    };

    self.saveChanges = function(selectedUser) {
        setLoader('saveChanges', true);
        if(selectedUser.new_password && selectedUser.new_password !== '') {
            self.changePassword(selectedUser.user_id, selectedUser.new_password);
        }

        User.alterUser(selectedUser).then(function(response) {
            displayLoader('saveChanges', false);
            self.message.detailedUserInfo = setMessage('Changes Saved', 'success', true);
        });
    };

    function displayLoader(loaderKey, show) {
        self.loaders[loaderKey].show = show;
    }

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

    function initMessages() {
        var message = {};
        message.table = setMessage(null, null, false);
        message.detailedUserInfo = setMessage(null, null, false);
        return message;
    }

    function initLoaders() {
        var loaders = {};
        loaders.saveChanges = setLoader(false);
        loaders.dataTable = setLoader(false);
        return loaders;
    }

    function setLoader(show) {
        var loader = {};
        loader.show = show;
        return loader;
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
