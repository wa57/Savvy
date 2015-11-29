app.controller('submitController', function($scope, $state, $http, stringReplace) {
    $scope.initialize = function() {
        $scope.product = {};
        $scope.receipt = {};
        $scope.product.price = 2;
        $scope.product.place_of_purchase = "walmart";
        $scope.product.name = "12 oz coffee";
        $scope.product.brand = "folger folger";
        $scope.product.product_type = "coffee";
    }

    $scope.submitPrice = function() {
        $scope.message = "processing";
        var id = Math.floor(Math.random() * (100 - 1));
        var url = "http://echo.jsontest.com/id/" + id + "/";
        for (var key in $scope.product) {
            url += key + "/" + $scope.product[key] + "/"
        }
        $http.post(url, {
            product: $scope.product
        })
        .success(function(data, status, headers, config) {
            console.log(data);
            $scope.receipt = {};
            for (var key in data) {
                $scope.receipt[key] = stringReplace.replaceAll(data[key], "%20", " ");
            }
            $scope.product = {};
            $scope.message = "success";
        }).error(function(data, status, headers, config) {
            $scope.status = status;
            $scope.message = "error";
        });
    }
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

                if($scope.returned_results_length === 0) {
                    $scope.message = "no-results";
                }
            })
            .error(function(data, status, headers, config) {
                $scope.status = status;
            });
    }

    $scope.initializeOptions = function() {
        $scope.order_options = [
            {
                name: "avg_price",
                display_name: "Average Price: Low to High",
                order_reverse: false
            },
            {
                name: "avg_price",
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
        $scope.chosen_order_item = $scope.order_options[4];
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
        if($scope.search_term !== "") {
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

app.controller('app', function($scope, $state) {});
app.controller('homeController', function($scope, $state) {});
app.controller('signUpController', function($scope, $state) {});
