angular.module('savvy').controller('product_controller',
['$scope', '$stateParams', 'productService', 'geolocationService', '$timeout', 'User',
function($scope, $stateParams, productService, geolocationService, $timeout, User) {
    var self = this;
    (function() {
        $scope.status = { product: 'loading', map: 'loading' };
        $scope.vote = {};
        $scope.product = {};
        User.getCurrentUser()
            .then(function(user) {
                return User.getVotingHistory(user.user_id);
            })
            .then(function(votingHistory) {
                self.getVoteForCurrentProduct(votingHistory);
            })
    })();

    $scope.sendVote = function(vote) {
        toggleVote(vote);
        productService.saveVote(vote, $scope.product.product_id);
    };

    self.getVoteForCurrentProduct = function(votingHistory) {
        votingHistory.forEach(function(vote, index) {
            if(vote.product_id === $stateParams.product_id) {
                toggleVote(vote.vote);
            }
        })
    };

    $scope.addTag = function(tag, product_id) {
        productService.saveTag(tag, product_id).then(function(response) {
            $scope.product.tags.push(tag);
        });
    }

    function toggleVote(vote) {
        console.log($scope.vote.up, vote);
        if($scope.vote.up === true && vote === 1) {
            console.log('inside');
            $scope.vote.up = false;
        }

        if(vote === 1) {
            $scope.vote.up = true; $scope.vote.down = false;
        } else if(vote === -1){
            $scope.vote.up = false; $scope.vote.down = true;
        }
    }

    $scope.calcVote = function(vote) {
        if($scope.vote.up) {

        }
        $scope.product.score = $scope.product.score + vote;
    };

    function fetchProductDetails(product_id) {
        productService.getProductById(product_id, 5).then(function(response){
            $scope.product = response;
            $scope.status.product = 'ready';
            fetchUserLocation(geolocationService);
            initChart();
        });
    }


    function fetchUserLocation(geolocationService) {
        geolocationService.getCurrentPosition().then(function(coordinates) {
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
                title: value.business_details.name
            });
        });
    }

    function initChart() {
        google.charts.setOnLoadCallback(function(){
            var chartLabels = ['Date', 'Average Price (USD)'];
            var data = [];
            $scope.product.average_price_per_day.forEach(function(value, index) {
                value[1] = (value[1] / 100);
                console.log(value);
                data.push(value);
            });
            console.log(data);
            data.reverse().unshift(chartLabels);
            console.log(data);

            var options = {
                width: '900',
                height: '300',
                curveType: 'function',
                hAxis: {
                    title: "Time"
                },
                vAxis: {
                    title: "Average Price (USD)"
                },
                colors: ['#00A388'],
                legend: { position: 'bottom' }
            };

            var chart = new google.charts.Line(document.getElementById('prices-graph'));
            chart.draw(google.visualization.arrayToDataTable(data), google.charts.Line.convertOptions(options));
            $scope.status.chart = 'ready';
        });
    }

    fetchProductDetails($stateParams.product_id);
}]);
