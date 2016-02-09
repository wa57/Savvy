angular.module('savvy')
.controller('product_controller', ['$scope', '$stateParams', 'productService', 'geolocationService',
function($scope, $stateParams, productService, geolocationService) {
    $scope.status = {
        product: 'loading',
        map: 'loading'
    };

    $scope.vote = function(vote) {
        productService.addVoteToProduct(vote); //yes or no
    }

    function fetchProductDetails(product_id) {
        productService.getProductById(product_id).then(function(response){
            $scope.product = response;
            $scope.status.product = 'ready';
            init_graph();
        });
    }

    function init_graph() {
        google.charts.setOnLoadCallback(function(){
            var data = google.visualization.arrayToDataTable([
              ['Date', 'Average Price (USD)'],
              ['6/21/16',  1.65],
              ['6/19/16',  1.46],
              ['6/18/16',  1.30],
              ['6/15/16',  1.56]
            ]);

            var options = {
              curveType: 'function',
              legend: { position: 'bottom' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('prices-graph'));
            chart.draw(data, options);
            $scope.status.chart = 'ready';
        });
    };

    function init_map(position) {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: position.coords.latitude, lng: position.coords.longitude},
            scrollwheel: false,
            zoom: 13
        });
        var positions = [
            {lat: position.coords.latitude, lng: position.coords.longitude},
            {lat: 39.975994, lng: -75.170329}
        ];

        generateMapMarkers(positions, map);
        $scope.status.map = "ready";
    }

    function generateMapMarkers(positions, map) {
        for(var i = 0; i < positions.length; i++) {
            new google.maps.Marker({
                map: map,
                position: positions[i],
                title: ''
            });
        }
    }

    function fetchUserLocation(geolocationService) {
        geolocationService.getCurrentPosition().then(function(response){
            init_map(response);
        });
    }

    fetchProductDetails($stateParams.product_id);
    fetchUserLocation(geolocationService, callback);
}]);
