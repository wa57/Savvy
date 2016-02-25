angular.module('savvy').controller('profileCtrl',
['$scope', 'User', '$stateParams', 'productService',
function($scope, User, $stateParams, productService) {
    var self = this;
    self.user = null;
    //self.user.products = [];

    User.getCurrentUser().then(function(user) {
        self.user = user;

        User.getPriceSubmissions(self.user.user_id).then(function(user_submissions) {
            self.user_submissions = user_submissions;
            console.log(self.user_submissions);
            user_submissions.forEach(function(value, index) {
                /*Product.getProductById(value.product_id).then(function(product) {
                    self.user.products.push(product);
                });*/
            });
        });
    });
}]);
