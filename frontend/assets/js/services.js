angular.module('savvy').service('productService', ['$http', function($http){
    'use strict';

    this.getProductById = function(product_id) {
        return $http.get("/api/v1/products/" + product_id + "?price_limit=10").then(function(response) {
            return response.data;
        });
    };

    this.getProductsByDesc = function(description) {
        if(description !== "") {
            return $http.get("/api/v1/products/search?query=" + description).then(function(response) {
                return response.data;
            });
        }
    };

    this.saveProduct = function(product) {
        return $http({
            method: "POST",
            url: "/api/v1/prices/add",
            data: product,
            headers: {'Content-Type': 'application/json'}
        }).then(function(response){
            return response.data;
        });
    };

    this.saveVote = function(vote, product_id) {
        if(typeof product_id !== 'undefined') {
            return $http.post("/api/v1/products/" + product_id + "/thumbs-" + vote).then(function(response) {
                return response;
            });
        }
    };
}]);


//https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec#.m8k0vbjmp
angular.module('savvy').service('authService', ['$http', function($http){
    /*
        ----Overview----

        1. Will send credentials to the server where they will be validated.
        The credentials will be sent over HTTPS so they will not need to be hashed
        on the client side before being sent.

        2. Server will respond with success or failure.
        If successful, the user's information (userid, name, email) will be stored
        in a cookie or localstorage but the password will NOT BE STORED.
        The only transmission or visibility of a password will be during the login process.

        3. On refresh of the page the non-sensitive user information will be restored
        from the cookie or localstorage. There should be no need to contact the server
        unless the page requires authorization.

        4. If the user logs out the storage key containing the user information will
        be destroyed.
    */

    this.login = function(credentials) {
        return $http({
            method: 'POST',
            url: 'api/v1/users/login',
            data: credentials,
            headers: {'Content-Type': 'application/json'}
        }).then(function(response){
            return response.data;
        });
        /*
            1. Will send credentials to the server where they will be validated.
            The credentials will be sent over HTTPS so they will not need to be hashed
            on the client side before being sent.
        */

        // AJAX https post goes here with user's credentials

        // AJAX response will be stored in cookie session with an expiration of 2 weeks
        // Session.setUserData(response.data);

        // Broadcast message of auth status (success or failure)

        //return credentials;
    };

    this.logout = function() {
        return $http.post('/api/v1/users/logout').then(function(response) {
            return response.data;
        });
    }

    this.isAuthenticated = function() {
        return typeof Session.userId !== 'undefined' && typeof Session.userId !== '';
    };

    // Need a function to check for individual page access if required
    this.isAuthorized = function(authorizedRoles) {
        /*
            Check in with server to determine access by sending just the userId and page identifier.
            Server will respond with allowed or denied along with page specific data if allowed.

            Server will determine things like user role and access. For example,
            visiting the admin page will send the userId to the server where it will check
            for access and send the protected data with the response.

            If the server denies access then no data will be sent.
        */

        /*
            var userData = Session.getData('userData');

            // Send userData.userId to server for authorization
            $http.get('apiendpoint')

            // Server responds with allowed/denied and data for page

            return response.data;
        */
    };

    this.getCurrentUser = function() {
        return $http.get('/api/v1/users/current').then(function(response) {
            return response.data;
        });
    };

    this.createUser = function(userData) {
        return $http({
            method: 'POST',
            url: 'api/v1/users/create',
            data: userData,
            headers: {'Content-Type': 'application/json'}
        }).then(function(response){
            return response.data;
        });
    };
}]);

angular.module('savvy').service('geolocationService', ['$q', '$window', function ($q, $window) {
    'use strict';

    this.getCurrentPosition = function() {
        var deferred = $q.defer();

        if (!$window.navigator.geolocation) {
            deferred.reject('Geolocation not supported.');
        } else {
            $window.navigator.geolocation.getCurrentPosition(
                function (position) {
                    deferred.resolve(position);
                },
                function (err) {
                    deferred.reject(err);
                });
        }
        return deferred.promise;
    }

    return this;
}]);

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

angular.module('savvy').service('stringReplace', function() { //For removing every occurence of "%20" in string
    this.escapeRegExp = function(str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };

    this.replaceAll = function(str, find, replace) {
        return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    };
});
