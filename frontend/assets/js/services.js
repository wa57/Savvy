angular.module('savvy')

.service('productService', ['$http', function($http){
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
}])


//https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec#.m8k0vbjmp
.factory('User', ['$http', '$q', '$state', '$rootScope', 'events', 'USER_ROLES', function($http, $q, $state, $rootScope, events, USER_ROLES) {
    function User() {
        var self = this;
        self.userData = null;

        self.getCurrentUser = function() {
            var deferred = $q.defer();
            if(self.userData !== null) {
                console.log('cache');
                deferred.resolve(self.userData);
            } else {
                $http.get('/api/v1/users/current').then(function(response) {
                    console.log('server');
                    self.userData = response.data;
                    deferred.resolve(response.data);
                }, function(err) {
                    console.log('forbidden');
                    deferred.reject(err);
                    self.userData = null;
                });
            }

            return deferred.promise;
        };

        self.getUserRoles = function() {
            return self.userData.user.roles;
        };

        self.getPriceSubmissionHistory = function() {

        };

        self.createUser = function(userData) {
            return $http({
                method: 'POST',
                url: 'api/v1/users/create',
                data: userData,
                headers: {'Content-Type': 'application/json'}
            }).then(function(response) {
                return response.data;
            });
        };

        self.isLoggedIn = function() {
            return self.userData !== null;
        };

        self.isAuthenticated = function() {
            return self.userData !== null;
        }

        self.isAuthorized = function(toState) {
            //pass in what roles are authorized
            //check if the input is an array
            var authorizedRoles = toState.authorizedRoles;
            console.log(toState.authorizedRoles, self.getUserRoles());
            if(self.isAuthenticated()) {
                if(!angular.isArray(toState.authorizedRoles)) {
                    authorizedRoles = [authorizedRoles];
                    //if it isn't then we make it one
                }

                self.getUserRoles().forEach(function(value, index) {
                    console.log(index, value);
                    console.log(authorizedRoles);
                    if(authorizedRoles.indexOf(value) === -1) {
                        console.log('ur fired');
                    }
                });
            } else {
                return false;
            }
            //
            //return (self.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
        };

        self.isRouteViewable = function(toState) {
            var authorizedRoles = toState.authorizedRoles;
            if(self.isAuthenticated()) {
                var userRoles = self.getUserRoles();
            }

            if(!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
                //if it isn't then we make it one
            }
            console.log('state roles: ', authorizedRoles);
            console.log('userRoles: ',userRoles);

            userRoles.forEach(function(value, index) {
                console.log(value);
                console.log(authorizedRoles.indexOf(value));
            });
            //bump them home
        }

        self.login = function(credentials) {
            return $http({
                method: 'POST',
                url: 'api/v1/users/login',
                data: credentials,
                headers: {'Content-Type': 'application/json'}
            }).then(function(response){
                self.userData = response.data;
                $rootScope.$broadcast(events.loginSuccess);
                $state.go('home');
                return response.data;
            });
        };

        self.logout = function() {
            return $http.post('/api/v1/users/logout').then(function(response) {
                self.userData = null;
                $rootScope.$broadcast(events.logoutSuccess);
                $state.go('login');
                return response.data;
            });
        };

        // Need a function to check for individual page access if required
        //self.isAuthorized = function(authorizedRoles) {
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
        //};
    }

    return new User();
}])

.service('geolocationService', ['$q', '$window', function ($q, $window) {
    'use strict';
    var self = this;

    self.currentPosition = null;

    self.getCurrentPosition = function() {
        var deferred = $q.defer();

        if ($window.navigator.geolocation) {
            if(self.currentPosition !== null) {
                deferred.resolve(self.currentPosition);
            } else {
                $window.navigator.geolocation.getCurrentPosition( function (position) {
                    self.currentPosition = position;
                    deferred.resolve(position);
                },
                function (err) {
                    deferred.reject(err);
                });
            }
        } else {
            deferred.reject('Geolocation not supported.');
        }

        return deferred.promise;
    }
}])

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

.service('stringReplace', function() { //For removing every occurence of "%20" in string
    this.escapeRegExp = function(str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };

    this.replaceAll = function(str, find, replace) {
        return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    };
})

.factory('responseObserver', ['$q', '$injector', function($q, $injector) {
    return {
        'responseError': function(errorResponse) {
            switch (errorResponse.status) {
                case 403:
                    //$injector.get('$state').go('login');
                    break;
            }
            return $q.reject(errorResponse);
        }
    }
}]);
