app.controller('homeController', function($scope, $state) {
    $scope.initialize = function() {
        $scope.user = {};
    }

    $scope.search = function() {
        //ajax call to api
        $state.go('product', {product: $scope.search_term});
    };

    $scope.initialize();
});

app.controller('signUpController', function($scope, $state) {
    console.log($state.includes);
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

app.controller('productController', function($scope, $stateParams) {
    var formatted_product = $stateParams.product[0].toUpperCase() + $stateParams.product.substr(1);
    $scope.product = {
        name: formatted_product,
        avg_price: "$2.67",
    };
});

app.controller('navController', function($scope) {
    $scope.user = {
        logged_in: true
    };
});
