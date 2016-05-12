angular.module('savvy').controller('receiptCtrl',
['$scope', '$state', 'productService', 'utilityService',
function($scope, $state, productService, utilityService) {
    var self = this;

    self.getProductsFromBase64Image = function(base64Image) {
        productService.getProductsFromBase64Image(base64Image).then(function(products) {
            self.productsFromImage = utilityService.filterOCRArray(products);
            console.log(self.productsFromImage);
        });
    };

    self.test = function(googlePlace) {
        console.log(googlePlace);
    };

    self.saveProduct = function(product) {

    };

}]);
