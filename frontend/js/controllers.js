app.controller('submitController', function($scope, $state, $http, stringReplace, $filter) {
    $scope.initialize = function() {
        $scope.initializeData();
        $scope.initializeGooglePlaces();
    }

    $scope.submitPrice = function() {
        $scope.message = "processing";
        var rounded_price = parseFloat($scope.price.toFixed(2)*100).toString();
        var price = parseInt(stringReplace.replaceAll(rounded_price, ".", ""));

        var tags = [];
        angular.forEach($scope.product.tags.split(","), function(tag, index) {
            tags.push(stringReplace.replaceAll(tag, " ", ""));
        });
        $scope.product.tags = tags;

        var post_data = {
            product: $scope.product,
            business: $scope.google_places,
            user: $scope.makeid(),
            price: price,
        };

        $http({
            method: "POST",
            url: savvy.api_root + "prices/add",
            data: post_data,
            headers: {'Content-Type': 'application/json'}
        })
            .success(function(data, status, headers, config) {
                $scope.createReceipt(data);
                $scope.product = {};
                $scope.message = "success";
            })
            .error(function(data, status, headers, config) {
                $scope.status = status;
                $scope.message = "error";
            });
    }

    $scope.initializeGooglePlaces = function() {
        var defaultBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(39.952584, -75.165222),
            new google.maps.LatLng(39.952584, -75.165222)
        );

        var input = document.getElementById('places');
        var options = {
          bounds: defaultBounds,
          types: ['establishment']
        };

        autocomplete = new google.maps.places.Autocomplete(input, options);

        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            $scope.google_places = autocomplete.getPlace();
            $scope.$apply();
        });
    }

    $scope.makeid = function() {
        var text = "testuser";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        for( var i=0; i < 5; i++ ) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    $scope.initializeData = function() {
        $scope.tag = "";
        $scope.product = {
            tags: []
        };
        $scope.receipt = {};
        $scope.message = "";
        $scope.messages = {
            tag_message: "",
            save_message: ""
        }
        $scope.google_places = "";
        $scope.price = "";
        document.getElementById('places').value = "";
    }

    $scope.createReceipt = function(api_response) {
        $scope.receipt = {
            id: api_response.id,
            business: $scope.google_places.formatted_address,
            tags: $scope.product.tags,
            price: $scope.price,
            description: $scope.product.description
        };
    }

    $scope.addTag = function() {
        var exists_in_array = $scope.product.tags.indexOf($scope.tag);
        if($scope.tag == "") {
            $scope.messages.tag_message = "error-empty-input";
            return;
        } else if(exists_in_array > -1) {
            $scope.messages.tag_message = "error-already-entered";
            return;
        }

        $scope.product.tags.push($scope.tag);
        $scope.tag = "";
        $scope.messages.tag_message = "";
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

        $http.get(savvy.api_root + "products/search?query=" + $scope.search_term)
            .success(function(data, status, headers, config) {
                $scope.products = data;
                console.log(data);
                $scope.returned_results_length = $scope.products.length;
                $scope.message = "success";
            })
            .error(function(data, status, headers, config) {
                $scope.status = status;
                $scope.message = "error";
            });
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
                name: "description",
                display_name: "Product Name: A to Z",
                order_reverse: false
            },
            {
                name: "description",
                display_name: "Product Name: Z to A",
                order_reverse: true
            },
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
    $scope.show_mobile_nav = false;

    $scope.search = function() {
        console.log($scope.search_term);
        if($scope.search_term !== "" && $scope.search_term) {
            console.log('hi');
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
});

//WIP CONTROLLERS

app.controller('productController', function($scope, $stateParams) {});
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
app.controller('homeController', function($scope, $state) {});
app.controller('signUpController', function($scope, $state) {});
