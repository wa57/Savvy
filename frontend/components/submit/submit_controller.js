angular.module('savvy')
    .controller('submit_controller', submit_controller)
    .$inject = ['$scope', '$state', 'ProductService', 'stringReplace', '$filter'];

function submit_controller($scope, $state, ProductService, stringReplace, $filter) {
    $scope.initialize = function() {
        $scope.initializeData();
        $scope.initializeGooglePlaces();
    }

    $scope.submitPrice = function() {
        $scope.message = "processing";

        var price = parseInt($scope.price.toFixed(2)*100);

        if($scope.product.tags.length > 0) {
            angular.forEach($scope.product.tags, function(tag, index) {
                $scope.product.tags[index] = stringReplace.replaceAll(tag, " ", "");
            });
        }

        var post_data = {
            product: $scope.product,
            business: $scope.google_places,
            user: $scope.makeid(),
            price: price,
            product_image: $scope.image
        };

        $http({
            method: "POST",
            url: "/api/v1/prices/add",
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
        $scope.image = "";
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
}
