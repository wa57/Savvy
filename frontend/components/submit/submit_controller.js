angular.module('savvy')
    .controller('submit_controller', submit_controller)
    .$inject = ['$scope', '$state', 'ProductService', 'stringReplace', '$filter'];

function submit_controller($scope, $state, productService, stringReplace, $filter) {
    $scope.initialize = function() {
        $scope.initializeData();
        $scope.initializeGooglePlaces();
    }

    $scope.submitPrice = function() {
        $scope.message = "processing";
        $scope.product.price = parseInt($scope.price.toFixed(2)*100);
        $scope.product.user = makeid();

        productService.saveProduct($scope.product).then(function(response){
            $scope.createReceipt($scope.product);
            $scope.product = {};
            $scope.message = "success";
        },
        function(){
            $scope.message = "error";
        });
    }

    $scope.initializeGooglePlaces = function() {
        var defaultBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(39.952584, -75.165222),
            new google.maps.LatLng(39.952584, -75.165222)
        );

        var input = document.getElementById('product-place');
        var options = {
          bounds: defaultBounds,
          types: ['establishment']
        };

        autocomplete = new google.maps.places.Autocomplete(input, options);

        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            $scope.product.place_id = autocomplete.getPlace().place_id;
            $scope.$apply();
        });
    }

    function makeid() {
        var text = "testuser";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        for( var i=0; i < 5; i++ ) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    $scope.initializeData = function() {
        $scope.product = {
            tags: []
        };
        $scope.receipt = {};
        $scope.message = "";
        $scope.messages = {
            tag_message: "",
            save_message: ""
        }
        $scope.price = "";
        document.getElementById('product-place').value = "";
    }

    $scope.createReceipt = function(api_response) {
        $scope.receipt = {
            id: api_response.id,
            business: $scope.google_places.formatted_address,
            tags: $scope.product.tags,
            price: $scope.price,
            description: $scope.product.description
        };
    };

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
    };

    $scope.searchProducts = function() {
        if($scope.product.description) {
            productService.getProductsByDesc($scope.product.description).then(function(response){
                $scope.products = response;
            });
        } else {
            $scope.products = [];
        }
    };

    $scope.selectProduct = function(selectedProduct) {
        $scope.product.description = selectedProduct.description;
    }

    $scope.initialize();
}
