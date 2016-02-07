angular.module('savvy')
    .controller('product_controller', product_controller)
    .$inject = ['$scope', '$stateParams', '$http'];

function product_controller($scope, $stateParams, $http) {
    $scope.product = {

    };

    $scope.vote = function(direction) {

    }

    $http.get("/api/v1/products/" + $stateParams.product_id)
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
                zoom: 10
            });
            var marker = new google.maps.Marker({
                map: map,
                position: {lat: position.coords.latitude, lng: position.coords.longitude},
                title: 'Hello World!'
            });
            var markers = ["test"];
            for(var i = 0; i < 5; i++) {

            }
        });
    };

    $scope.initGraph();
    $scope.initMap();
};
