angular.module('savvy').controller('navCtrl',
['$scope', '$state', 'User', '$rootScope', 'EVENTS',
function($scope, $state, User, $rootScope, EVENTS) {
    var self = this;

    function init() {
        $scope.state = $state;
        $scope.show_mobile_nav = false;
        self.isAuthenticated = false;
        self.userData = null;
        User.getCurrentUser().then(function(user) {
            self.userData = user;
            self.isAuthenticated = User.isAuthenticated();
            self.isAdmin = User.isAdmin(user);
        });
    }

    $rootScope.$on(EVENTS.logoutSuccess, function() {
        self.isAuthenticated = false;
        self.isAdmin = false;
        self.userData = null;
    });

    $rootScope.$on(EVENTS.loginFailure, function() {

    })

    $rootScope.$on(EVENTS.loginSuccess, function() {
        User.getCurrentUser().then(function(user) {
            self.userData = user;
            self.isAuthenticated = User.isAuthenticated();
            self.isAdmin = User.isAdmin(user);
        });
    });

    self.search = function() {
        if(self.search_term !== "" && self.search_term) {
            $state.go('search', {search_term: self.search_term});
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
