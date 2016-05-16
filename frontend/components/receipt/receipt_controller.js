angular.module('savvy').controller('receiptCtrl',
['$scope', '$state', 'productService', 'utilityService', 'User',
function($scope, $state, productService, utilityService, User) {
    var self = this;
    self.message = setMessage(null, null, false);
    self.loader = {};
    self.loader.getProducts = {};
    displayLoader('getProducts', false);

    User.getCurrentUser().then(function(user) {
        self.currentUser = user;
    });

    self.getProductsFromBase64Image = function(base64Image) {
        displayLoader('getProducts', true);
        productService.getProductsFromBase64Image(base64Image).then(function(products) {
            displayLoader('getProducts', false);
            var productsFromImage = utilityService.filterOCRArray(products);
            productsFromImage = utilityService.addKeyValueToObjects('user', self.currentUser.user_id, productsFromImage)
            self.productsFromImage = productsFromImage;
        });
    };

    self.saveProducts = function(googlePlace, products) {
        processedProducts = processProducts(products, googlePlace.place_id, googlePlace.business_name);
        productService.saveProducts(processedProducts).then(function(response) {
            self.message = setMessage('Products Saved!', 'success', true);
        });
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

    function setMessage(text, status, show) {
        var message = {};
        message.text = text;
        message.status = status;
        message.show = show;
        return message;
    }

    function displayLoader(loaderKey, show) {
        self.loader[loaderKey].show = show;
    }

}]);
