angular.module('savvy').controller('submitCtrl', submitCtrl)
.$inject = ['$scope', 'productService', '$filter'];

function submitCtrl($scope, productService, $filter) {
    function init() {
        initData();
        initGooglePlaces();
        $scope.product = initProduct();
        setMessages();
    }

    function initData() {
        $scope.price = '';
        document.getElementById('product-place').value = "";
    }

    function setMessages() {
        $scope.message = "";
        $scope.messages = {
            tag_message: "",
            save_message: ""
        };
    }

    function initGooglePlaces() {
        var defaultBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(39.952584, -75.165222),
            new google.maps.LatLng(39.952584, -75.165222)
        );

        autocomplete = new google.maps.places.Autocomplete(document.getElementById('product-place'), {
            bounds: defaultBounds,
            types: ['establishment']
        });

        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            console.log(autocomplete.getPlace());
            $scope.product.place_id = autocomplete.getPlace().place_id;
            $scope.product.business_name = autocomplete.getPlace().name;
            $scope.$apply();
        });
    }

    $scope.submitPrice = function() {
        $scope.message = "processing";
        $scope.product.price = parseInt($scope.price.toFixed(2)*100);
        $scope.product.user = '1';
        console.log($scope.product);
        productService.saveProduct($scope.product).then(function(response){
            $scope.message = "success";
            $scope.product = initProduct();
            initData();
        },
        function(){
            $scope.message = "error";
        });
    };

    function initProduct() {
        var product = {};
        product.tags = [];
        product.image = null;
        document.getElementById('product-image').value = "";
        return product;
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
    };

    $scope.searchProducts = function(productDesc) {
        if(productDesc && productDesc.length > 3) {
            productService.getProductsByDesc(productDesc).then(function(response){
                $scope.products = response;
            });
        } else {
            $scope.products = [];
        }
    };

    $scope.selectProduct = function(selectedProduct) {
        $scope.product.description = selectedProduct.description;
    }

    init();
}
