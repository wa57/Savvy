angular.module('savvy')
    .controller('search_controller', search_controller)
    .$inject = ['$scope', '$stateParams', '$http', '$state'];

function search_controller($scope, $stateParams, $http, $state) {
    $scope.initialize = function() {
        $scope.initializeData();
        $scope.initializeOptions();
    }

    $scope.initializeData = function() {
        $scope.search_term = $stateParams.search_term;
        $scope.message = "processing";

        $http.get("/api/v1/products/search?query=" + $scope.search_term)
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
};
