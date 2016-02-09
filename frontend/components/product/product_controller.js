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

    $scope.init_graph = function() {
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
        });
    };

    $scope.init_map = function() {
        $scope.map_status = "loading";
        navigator.geolocation.getCurrentPosition(function(position) {
            $scope.map_status = "success";
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: position.coords.latitude, lng: position.coords.longitude},
                scrollwheel: false,
                zoom: 13
            });
            var positions = [
                {lat: position.coords.latitude, lng: position.coords.longitude},
                {lat: 39.975994, lng: -75.170329}
            ];
            for(var i = 0; i < positions.length; i++) {
                new google.maps.Marker({
                    map: map,
                    position: positions[i],
                    title: 'Hello World!'
                });
            }
        });
    };

    $scope.init_map();
    $scope.init_graph();
};
