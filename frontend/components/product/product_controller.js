angular.module('savvy')
.controller('product_controller', ['$scope', '$stateParams', 'productService', 'geolocationService',
function($scope, $stateParams, productService, geolocationService) {
    (function() {
        $scope.status = { product: 'loading', map: 'loading' };
        $scope.vote = {};
        $scope.product = {};
    })();

    $scope.sendVote = function(vote) {
        toggleVote(vote);
        productService.saveVote(vote, $scope.product.product_id);
    }

    function toggleVote(vote) {
        if(vote === 'up') {
            $scope.vote.up = true; $scope.vote.down = false;
        } else {
            $scope.vote.up = false; $scope.vote.down = true;
        }
    }

    function fetchProductDetails(product_id) {
        productService.getProductById(product_id).then(function(response){
            $scope.product = response;
            $scope.status.product = 'ready';
        });
    }


    function fetchUserLocation(geolocationService) {
        geolocationService.getCurrentPosition().then(function(response){
            initMap(response);
        });
    }

    function initMap(position) {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: position.coords.latitude, lng: position.coords.longitude},
            scrollwheel: false,
            zoom: 12
        });
        generateBusinessMapMarkers(map);
        $scope.status.map = "ready";
    }

    function generateBusinessMapMarkers(map) {
        $scope.product.businesses.forEach(function(value, index) {
            if(index < 10) {
                var lat_long = {lat: value.google_places.geometry.location.lat, lng: value.google_places.geometry.location.lng};
                new google.maps.Marker({
                    map: map,
                    position: lat_long,
                    title: value.name
                });
            }
        });
    }

    function initChart() {
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
    }

    fetchProductDetails($stateParams.product_id);
    fetchUserLocation(geolocationService);
    initChart();
}]);
