angular.module('savvy')
.controller('product_controller', ['$scope', '$stateParams', 'productService', 'geolocationService', '$timeout',
function($scope, $stateParams, productService, geolocationService, $timeout) {
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
            fetchUserLocation(geolocationService);
            initChart();
        });
    }


    function fetchUserLocation(geolocationService) {
        geolocationService.getCurrentPosition().then(function(coordinates){
            initMap(coordinates);
        });
    }

    function initMap(coordinates) {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: coordinates.latitude, lng: coordinates.longitude},
            scrollwheel: false,
            zoom: 12
        });
        resetMapCenter(map);
        generateBusinessMapMarkers(map, $scope.product.price_submissions);
        $scope.status.map = "ready";
    }

    function resetMapCenter(map) {
        var center = map.getCenter();
        $timeout(function() {
            google.maps.event.trigger(map, 'resize');
            map.setCenter(center);
        }, 300);
    }

    function generateBusinessMapMarkers(map, price_submissions) {
        price_submissions.forEach(function(value, index) {
            new google.maps.Marker({
                map: map,
                position: {
                    lat: value.business_details.google_places.geometry.location.lat,
                    lng: value.business_details.google_places.geometry.location.lng
                },
                title: value.name
            });
        });
    }

    function initChart() {
        google.charts.setOnLoadCallback(function(){
            var data = [
                ['Date', 'Average Price (USD)']
            ];

            $scope.product.average_price_per_day.forEach(function(value, index) {
                value[1] = (value[1] / 100);
                data.push(value);
            });
            var chart = new google.visualization.LineChart(document.getElementById('prices-graph'));
            chart.draw(google.visualization.arrayToDataTable(data), {
                curveType: 'function',
                legend: { position: 'bottom' }
            });
            $scope.status.chart = 'ready';
        });
    }

    fetchProductDetails($stateParams.product_id);
}]);
