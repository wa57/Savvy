angular.module('savvy')
.controller('appController', ['$scope', 'authService',
function($scope, authService) {
    authService.getCurrentUser().then(function(response) {
        $scope.userData = response;
    });
}]);
