/*module.service('Search', ['$rootScope', '$injector', '$state' function($rootScope, $injector, $state) {
    var service = {
        search: function(search_term) {
             if($scope.search_term !== "") {
                 $state.go('search', {search_term: $scope.search_term});
             }
        }
    };
    return service;
}]);*/

app.service('stringReplace', function() { //For removing every occurence of "%20" in string
    this.escapeRegExp = function(str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };

    this.replaceAll = function(str, find, replace) {
        return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    };
});

angular.module('savvy').service('ProductService', ['$http', function($http) {
    this.saveProduct = function(product) {
        return $http({
            method: "POST",
            url: savvy.api_root + "prices/add",
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
    };

    this.searchGoats = function(query) {
        return $http.get('/goats/search/' + query);
    };

    this.getGoats = function() {
        return $http.get('/goats');
    };

    this.getGoat = function(name) {
        return $http.get('/goat/' + name);
    };
}]);
