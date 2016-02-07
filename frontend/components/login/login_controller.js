angular.module('savvy')
    .controller('login_controller', login_controller)
    .$inject = ['$scope', '$state'];

function login_controller($scope, $state) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            console.log('hi');
        });
    }
}
