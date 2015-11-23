app.controller('app', function($scope, $state) {

});

app.controller('submitController', function($scope, $state, $http) {
    $scope.initialize = function() {
        $scope.product = {};
        $scope.receipt = {};
    }
    $scope.submitPrice = function() {
        console.log($scope.product.image);
        $scope.receipt = $scope.product; //mock code
        $scope.receipt.id = 432126;

        //this should go in callback after ajax success
        $scope.message = "success";


        /*$http.post("js/submitPriceFactory.json", {
            product: $scope.product
        })
        .success(function(data, status, headers, config) {
            $scope.data = data;
            console.log("hi");
        }).error(function(data, status, headers, config) {
            $scope.status = status;
            console.log("error");
        });*/
    }

    $scope.initialize(); //can put this in ng-init
});

app.controller('homeController', function($scope, $state) {
    $scope.initialize = function() {
        $scope.user = {};
        $scope.search_term = "";
    }

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

app.controller('searchController', function($scope, $stateParams, $http, $state) {
    $scope.search_term = $stateParams.search_term;
    $scope.initialize = function() {
        $scope.initializeOptions();
    }
    $scope.initializeOptions = function() {
        $scope.order_options = [
            {
                "name": "avg_price",
                "display_name": "Average Price: Low to High",
                "order_reverse": false
            },
            {
                "name": "avg_price",
                "display_name": "Average Price: High to Low",
                "order_reverse": true
            },
            {
                "name": "low_price",
                "display_name": "Lowest Price (Descending)",
                "order_reverse": false
            },
            {
                "name": "name",
                "display_name": "Product Name: A to Z",
                "order_reverse": false
            },
            {
                "name": "name",
                "display_name": "Product Name: Z to A",
                "order_reverse": true
            }
        ];
        $scope.chosen_order_item = $scope.order_options[0];
        $scope.orderBy();
    }
    $scope.orderBy = function() {
        //console.log($scope.sort_item);
        console.log($scope.chosen_order_item);
        $scope.order_item = $scope.chosen_order_item.name;
        $scope.order_reverse = $scope.chosen_order_item.order_reverse;
        console.log($scope.order_reverse);
    }
    $http.get("includes/factory.json", {
        "foo":"bar"
    })
    .success(function(data, status, headers, config) {
        $scope.products = data;
        $scope.returned_results_length = Object.keys($scope.products).length;
        if(!$stateParams.search_term) {
            console.log('load in no results');
            $scope.products = "";
        }
    }).error(function(data, status, headers, config) {
        $scope.status = status;
    });

    $scope.initialize();
});

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

app.controller('navController', function($scope, $state) {
    $scope.state = $state;
    console.log($scope.state);
    $scope.nav_links = {
        "home": {
            "name": "Home",
            "route": "/",
        },
        "search": {
            "name": "Search",
            "route": "search",
        },
        "signup": {
            "name": "Sign Up Free",
            "route": "signup",
        },
        "login": {
            "name": "Login",
            "route": "login",
        }
    };

    $scope.displayLink = function(link) {
        /*switch(link.name) {
            case "Home":
                return true;
            break;
            case "Search":
                return
        }*/
    }

    $scope.search = function() {
        if($scope.search_term !== "") {
            $state.go('search', {search_term: $scope.search_term});
        }
    }
});

app.filter('orderObjectBy', function() {
    return function(items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function(item) {
            filtered.push(item);
        });
        filtered.sort(function (a, b) {
            return (a[field] > b[field] ? 1 : -1);
        });
        if(reverse) filtered.reverse();
        return filtered;
    };
});
