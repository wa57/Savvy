angular.module('savvy').controller('profileCtrl',
['$scope', 'User', '$stateParams', 'productService', '$q', 'adminService',
function($scope, User, $stateParams, productService, $q, adminService) {
    var self = this;
    self.user = null;
    self.status = {};

    function init() {
        getUserByUsername($stateParams.username);
    }

    function getUserByUsername(username) {
        adminService.getUserByUsername(username).then(function(response) {
            if(response.status && response.status === 403) {
                User.getCurrentUser().then(function(user) {
                    self.user = user;
                });
            } else {
                self.user = response;
            }
        });
    }

    User.getCurrentUser()
        .then(function(user) {
            self.user = user;
            return User.getPriceSubmissions(user.user_id);
        })
        .then(function(user_submissions) {
            var promises = [];
            var productIds = [];
            self.user_submissions = user_submissions
            self.user_submissions.forEach(function(submission) {
                productIds.push(submission.product_id);
            });
            var uniqueProductIds = self.dedupeArray(productIds);
            uniqueProductIds.forEach(function(productId) {
                promises.push(productService.getProductById(productId, 1));
            });

            $q.all(promises).then(function success(data){
                self.user_submissions.forEach(function(submission) {
                    data.forEach(function(product) {
                        if(submission.product_id === product.product_id) {
                            submission.product = product;
                        }
                    });
                });
                self.status.price_history = 'ready';
            }, function failure(err){
                // Can handle this is we want
            });
        });

    self.dedupeArray = function(productIds) {
        return uniqueArray = productIds.filter(function(item, pos) {
            return productIds.indexOf(item) == pos;
        });
    };

    init();
}]);
