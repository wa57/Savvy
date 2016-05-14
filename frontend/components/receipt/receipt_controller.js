angular.module('savvy').controller('receiptCtrl',
['$scope', '$state', 'productService', 'utilityService', 'User',
function($scope, $state, productService, utilityService, User) {
    var self = this;

    User.getCurrentUser().then(function(user) {
        self.currentUser = user;
    });

    self.getProductsFromBase64Image = function(base64Image) {
        productService.getProductsFromBase64Image(base64Image).then(function(products) {
            var productsFromImage = utilityService.filterOCRArray(products);
            productsFromImage = utilityService.addKeyValueToObjects('user', self.currentUser.user_id, productsFromImage)
            self.productsFromImage = productsFromImage;
            console.log(productsFromImage);
        });
    };

    self.test = function(googlePlace) {
        console.log(googlePlace);
    };

    self.saveProduct = function(product) {

    };

    self.saveProducts = function(googlePlace, products) {
        //products = setPlacesInfoToAllProducts(googlePlace.place_id, googlePlace.business_name, products);
        processedProducts = processProducts(products, googlePlace.place_id, googlePlace.business_name);
        console.log(processedProducts);
        /*productService.saveProducts(processedProducts).then(function(response) {
            console.log(response);
        });*/
    };

    function setPlacesInfoToAllProducts(place_id, business_name, products) {
        for(var i = 0; i < products.length; i++) {
            products[i]['place_id'] = place_id;
            products[i]['business_name'] = business_name;
        }
        return products;
    }

    function processProducts(products, place_id, business_name) {
        var newProducts = [];
        for(var i = 0; i < products.length; i++) {
            var newProduct = utilityService.copyObjToObj(products[i]);
            newProduct.place_id = place_id;
            newProduct.price = parseInt(parseFloat(newProduct.price).toFixed(2)*100);
            newProducts.push(newProduct);
        }
        return newProducts;
    }

}]);
