angular.module('savvy').controller('detailedUserInfoCtrl',
['$scope', '$state', 'User', '$rootScope', 'EVENTS', 'adminService',
function($scope, $state, User, $rootScope, EVENTS, adminService) {
    var self = this;
    console.log($state);
    function init() {

    }

    adminService.getUserByUsername('will').then(function(response) {
        console.log(response);
    });

    init();
}]);
