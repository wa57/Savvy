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
});

//WIP CONTROLLERS

app.controller('productController', function($scope, $stateParams, $http) {
    $scope.product = {

    };

    $scope.vote = function(direction) {

    }

    $http.get(savvy.api_root + "products/" + $stateParams.product_id)
        .success(function(data, status, headers, config){
            console.log(data);
            $scope.product = data;
        });

    $scope.initGraph = function() {
        google.charts.setOnLoadCallback(function(){
            var data = google.visualization.arrayToDataTable([
              ['Date', 'Average Price (USD)'],
              ['2004',  1000],
              ['2005',  1170],
              ['2006',  660],
              ['2007',  1030]
            ]);

            var options = {
              curveType: 'function',
              legend: { position: 'bottom' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('prices-graph'));

            chart.draw(data, options);
        });
    };

    $scope.initMap = function() {
        $scope.map_status = "loading";
        navigator.geolocation.getCurrentPosition(function(position) {
            $scope.map_status = "success";
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: position.coords.latitude, lng: position.coords.longitude},
                scrollwheel: false,
                zoom: 8
            });
            console.log(map);
        });
    };

    $scope.initGraph();
    $scope.initMap();
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
app.controller('homeController', function($scope, $state) {});
app.controller('signUpController', function($scope, $state) {});
