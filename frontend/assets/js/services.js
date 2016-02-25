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
.factory('User', ['$http', '$q', '$state', '$rootScope', 'EVENTS', '$cookies', function($http, $q, $state, $rootScope, EVENTS, $cookies) {
    function User() {
        var self = this;
        self.userData = null;

        self.getCurrentUser = function() {
            var deferred = $q.defer();
            if(self.userData !== null) {
                console.log('cache');
                deferred.resolve(self.userData);
            } else if($cookies.getObject('user')) {
                console.log('cookie');
                self.userData = $cookies.getObject('user');
                deferred.resolve(self.userData);
            } else if($cookies.get('user_token')) {
                $http.get('/api/v1/users/current').then(function(response) {
                    console.log('server');
                    self.userData = response.data.user;
                    deferred.resolve(response.data);
                }, function(err) {
                    console.log('forbidden');
                    deferred.reject(err);
                    self.userData = null;
                });
            } else {
                console.log('not authenticated');
                deferred.reject(EVENTS.notAuthenticated);
                self.userData = null;
            }

            return deferred.promise;
        };

        self.getUserRoles = function() {
            return self.userData.roles;
        };

        self.getUserPriceSubmissions = function() {

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

        self.isAuthenticated = function() {
            return self.userData !== null;
        }

        self.isAuthorized = function(authorizedRoles) {
            var isAuthorized = true;
            if(self.isAuthenticated()) {
                if(!angular.isArray(authorizedRoles)) {
                    authorizedRoles = [authorizedRoles];
                }

                self.getUserRoles().forEach(function(value, index) {
                    if(authorizedRoles.indexOf(value) === -1) {
                        isAuthorized = false;
                    }
                });
            } else {
                isAuthorized = false;
            }
            console.log(isAuthorized);
            return isAuthorized;
        };

        self.login = function(credentials) {
            return $http({
                method: 'POST',
                url: 'api/v1/users/login',
                data: credentials,
                headers: {'Content-Type': 'application/json'}
            }).then(function(response) {
                var expireDate = new Date();
                expireDate.setDate(expireDate.getDate() + 1);
                $cookies.putObject('user', response.data.user, {
                    expires: expireDate
                });

                self.userData = response.data.user;
                $rootScope.$broadcast(EVENTS.loginSuccess);
                $state.go('home');
                return response.data.user;
            });
        };

        self.logout = function() {
            return $http.post('/api/v1/users/logout').then(function(response) {
                self.userData = null;
                $cookies.remove('user');
                $cookies.remove('username');
                $cookies.remove('user_token');
                $rootScope.$broadcast(EVENTS.logoutSuccess);
                $state.go('login');
                return response.data;
            });
        };
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
                console.log('from cache');
                deferred.resolve(self.currentPosition);
            } else if($window.sessionStorage.getItem('coordinates')) {
                console.log('from sessionStorage');
                self.currentPosition = JSON.parse($window.sessionStorage.getItem('coordinates'));
                deferred.resolve(JSON.parse($window.sessionStorage.getItem('coordinates')));
            } else {
                $window.navigator.geolocation.getCurrentPosition(function(position) {
                    console.log('from navigator');
                    var coordinates = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                    self.currentPosition = coordinates;
                    $window.sessionStorage.setItem('coordinates', JSON.stringify(coordinates));
                    deferred.resolve(self.currentPosition);
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

.service('maps', ['$window', function($window) {
    var self = this;
    self.map = null;

    self.getMap = function() {
        if(self.map !== null) {
            deferred.resolve(self.map);
        } else if($window.sessionStorage.getItem('map')) {
            self.map = $window.sessionStorage.getItem('map');
            deferred.resolve(JSON.parse($window.sessionStorage.getItem('map')));
        } else {
            var map = new $window.google.maps.Map(document.getElementById('map'), {
                center: {lat: 39.9568218, lng: -75.189576},
                scrollwheel: false,
                zoom: 12
            });
            self.map = map;
            $window.sessionStorage.setItem('map', JSON.stringify(map));
            deferred.resolve(self.map);
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
