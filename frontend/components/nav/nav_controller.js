angular.module('savvy')
    .controller('nav_controller', nav_controller)
    .$inject = ['$scope', '$state', 'authService'];

function nav_controller($scope, $state, authService) {
    $scope.state = $state;
    $scope.show_mobile_nav = false;

    console.log($scope);
    $scope.search = function() {
        if($scope.search_term !== "" && $scope.search_term) {
            $state.go('search', {search_term: $scope.search_term});
        }
    }

    $scope.showMobileNav = function() {
        if(!$scope.show_mobile_nav) {
            $scope.show_mobile_nav = true;
        } else {
            $scope.show_mobile_nav = false;
        }
    }

    $scope.logout = function() {
        authService.logout();
    }

}
