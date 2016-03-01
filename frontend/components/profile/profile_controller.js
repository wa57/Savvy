angular.module('savvy').controller('profileCtrl',
['$scope', 'User', '$stateParams', 'productService', '$q', 'User', 'userData',
function($scope, User, $stateParams, productService, $q, userData) {
    console.log(userData.userData);
    var self = this;
    self.user = null;
    self.status = {};

    /*array.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
    });*/

    User.getCurrentUser()
        .then(function(user) {
            self.user = user;
            return User.getPriceSubmissions(user.user_id);
        })
        .then(function(user_submissions) {
            //productIds.push(value.product_id);
            //var uniqueProductIds = self.getUniqueProductIds();
            var promises = [];
            self.user_submissions = user_submissions;
            self.user_submissions.forEach(function(value, index) {
                promises.push(productService.getProductById(value.product_id, 1).then(function(product) {
                    value.product = product;
                }));
            });

            $q.all(promises).then(function success(data){
                console.log('we completedddd');
                self.status.price_history = 'ready';
            }, function failure(err){
                // Can handle this is we want
            });
        });

    self.getProductIds = function() {

    };

    self.dedupeArray = function() {
        return uniqueArray = productIds.filter(function(item, pos) {
            return productIds.indexOf(item) == pos;
        });
    }
}]);
