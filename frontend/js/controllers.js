app.controller('submitController', function($scope, $state, $http, stringReplace) {
    $scope.initialize = function() {
        $scope.product = {};
        $scope.receipt = {};
    }

    $scope.submitPrice = function() {
        $scope.message = "processing";
        var rounded_price = parseFloat($scope.product.price.toFixed(2)*100).toString();
        var price = parseInt(stringReplace.replaceAll(rounded_price, ".", ""));
        var user = makeid();

        $http.post("http://besavvy.xyz/api/v1/prices/add", {
            product: $scope.product.description,
            business: $scope.product.business,
            user: user,
            price: price
        })
        .success(function(data, status, headers, config) {
            $scope.receipt = JSON.parse(JSON.stringify($scope.product));
            $scope.receipt.id = data.id;
            $scope.product = {};
            $scope.message = "success";
        }).error(function(data, status, headers, config) {
            $scope.status = status;
            $scope.message = "error";
        });
    }

    function makeid() {
        var text = "testuser";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        for( var i=0; i < 5; i++ ) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    $scope.initialize();
});

app.controller('searchController', function($scope, $stateParams, $http, $state) {
    $scope.initialize = function() {
        $scope.initializeData();
        $scope.initializeOptions();
    }

    $scope.initializeData = function() {
        $scope.search_term = $stateParams.search_term;
        $scope.message = "processing";

        $http.get("http://besavvy.xyz/api/v1/products/search?query=" + $scope.search_term)
            .success(function(data, status, headers, config) {
                $scope.products = data;
                $scope.returned_results_length = $scope.products.length;
                $scope.message = "success";
            })
            .error(function(data, status, headers, config) {
                $scope.status = status;
            });

            console.log($scope.message);
    }

    $scope.initializeOptions = function() {
        $scope.order_options = [
            {
                name: "average_price",
                display_name: "Average Price: Low to High",
                order_reverse: false
            },
            {
                name: "average_price",
                display_name: "Average Price: High to Low",
                order_reverse: true
            },
            {
                name: "name",
                display_name: "Product Name: A to Z",
                order_reverse: false
            },
            {
                name: "name",
                display_name: "Product Name: Z to A",
                order_reverse: true
            },
            {
                name: "description",
                display_name: "Description: A to Z",
                order_reverse: false
            }

        ];
        $scope.chosen_order_item = $scope.order_options[0];
        $scope.orderBy();
    }
    $scope.orderBy = function() {
        $scope.order_item = $scope.chosen_order_item.name;
        $scope.order_reverse = $scope.chosen_order_item.order_reverse;
    }

    $scope.initialize();
});

app.controller('navController', function($scope, $state) {
    $scope.state = $state;
    $scope.search = function() {
        if($scope.search_term !== "" && $scope.search_term) {
            $state.go('search', {search_term: $scope.search_term});
        }
    }
});

//WIP CONTROLLERS

app.controller('productController', function($scope, $stateParams) {
    var formatted_product = $stateParams.product[0].toUpperCase() + $stateParams.product.substr(1);
    $scope.product = {
        name: formatted_product,
        avg_price: "2.67",
        highest_price: "3.57",
        tags: {
            coffee: {
                name: "coffee"
            },
            drink: {
                name: "drink"
            },
            tasty: {
                name: "tasty"
            }
        },
    };
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

app.controller('app', function($scope, $state) {
    console.log($state);
    $scope.title = $state.current.display_name;
    console.log($state.current);
});

app.controller('homeController', function($scope, $state) {});
app.controller('signUpController', function($scope, $state) {});