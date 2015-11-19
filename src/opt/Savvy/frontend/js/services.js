module.service('Search', ['$rootScope', '$injector', '$state' function($rootScope, $injector, $state) {
    var service = {
        search: function(search_term) {
             if($scope.search_term !== "") {
                 $state.go('search', {search_term: $scope.search_term});
             }
        }
    };
    return service;
}]);
