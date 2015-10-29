var app = angular.module('savvy', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('/', {
            url: '/',
            templateUrl: 'templates/template_home.html',
            controller: 'homeController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('signup', {
            url: '/signup',
            templateUrl: 'templates/template_signup.html',
            controller: 'signUpController'
        })

        .state('login', {
            url: '/login',
            templateUrl: 'templates/template_login.html',
            controller: 'loginController'
        })

        .state('search', {
            url: '/search',
            templateUrl: 'templates/template_search.html',
            controller: 'searchController'
        })

});

app.controller('homeController', function($scope) {
    $scope.initialize = function() {
        $scope.user = {};
    }

    $scope.initialize();
});

app.controller('signUpController', function($scope) {
    $scope.saveNewUser = function() {
        console.log($scope.user);
        //ajax post new user to api
        /*$http.post("http://example.appspot.com/rest/app", {
            "foo":"bar"
        })
        .success(function(data, status, headers, config) {
            $scope.data = data;
        }).error(function(data, status, headers, config) {
            $scope.status = status;
        });*/
    }

    $scope.initialize = function() {
        $scope.user = {};
    }

    $scope.initialize();
});

app.controller('loginController', function($scope) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            console.log('hi');
        });
    }
});

app.controller('searchController', function($scope) {
    
});

app.controller('navController', function($scope) {
    $scope.user = {
        logged_in: true
    };
});
