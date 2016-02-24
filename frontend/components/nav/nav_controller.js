angular.module('savvy').controller('navCtrl', 
['$scope', '$state', 'User', '$rootScope', 'EVENTS',
function($scope, $state, User, $rootScope, EVENTS) {
    var self = this;

    function init() {
        $scope.state = $state;
        $scope.show_mobile_nav = false;
        User.getCurrentUser().then(function(response) {
            self.userData = response.user;
            self.isLoggedIn = User.isLoggedIn();
        });
    }

    $rootScope.$on(EVENTS.logoutSuccess, function() {
        self.isLoggedIn = false;
        self.userData = null;
    });

    $rootScope.$on(EVENTS.loginSuccess, function() {
        User.getCurrentUser().then(function(response) {
            self.userData = response.user;
            self.isLoggedIn = User.isLoggedIn();
        });
    });

    $scope.search = function() {
        if($scope.search_term !== "" && $scope.search_term) {
            $state.go('search', {search_term: $scope.search_term});
        }
    };

    $scope.showMobileNav = function() {
        if(!$scope.show_mobile_nav) {
            $scope.show_mobile_nav = true;
        } else {
            $scope.show_mobile_nav = false;
        }
    };

    $scope.logout = function() {
        User.logout();
    };

    init();
}]);
