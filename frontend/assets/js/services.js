angular.module('savvy')

.service('productService', ['$http' ,'$q', 'utilityService', function($http, $q, utilityService){
    'use strict';
    var self = this;

    self.getProductById = function(product_id, price_limit) {
        if(typeof price_limit === 'undefined') {
            price_limit = 10;
        }

        return $http.get("/api/v1/products/" + product_id + "?price_limit=" + price_limit).then(function(response) {
            return response.data;
        });
    };

    self.getProductsByIds = function(product_ids) {
        var promises = [];
        for(var i = 0; i < product_ids.length; i++) {
            var productPromise = self.getProductById(product_ids[i], 5);
            promises.push(productPromise);
        }

        return $q.all(promises).then(function success(products){
            return products;
        });
    };

    self.getUniqueProductsByIds = function(baseArray, limit) {
        if(typeof limit !== 'undefined' && baseArray.length > limit) {
            baseArray.reverse();
            baseArray.length = limit;
        }
        var uniqueProductIds = utilityService.getUniqueArray('product_id', baseArray);
        return self.getProductsByIds(uniqueProductIds).then(function(products) {
            return utilityService.compareAndMergeObjectsByKey('product_id', baseArray, products);
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
        vote = 'up';
        if(vote === -1) {
            vote = 'down';
        }

        if(typeof product_id !== 'undefined') {
            return $http.post("/api/v1/products/" + product_id + "/thumbs-" + vote).then(function(response) {
                return response;
            });
        }
    };

    this.saveTag = function(tag, product_id) {
        if(tag && tag !== '') {
            return $http.post('/api/v1/products/' + product_id + '/tag', { 'tag': tag }).then(function(response) {
                return response;
            });
        }
    };

    this.getProductsFromBase64Image = function(base64Image) {
        return $http({
            method: "POST",
            url: "/api/v1/ocr/get-products-from-upload",
            data: {'image': base64Image}
        }).then(function(response){
            return response.data.products;
        });
    };
}])

.service('adminService', ['$http', function($http){
    var self = this;

    self.getAllUsers = function() {
        return $http.get('/api/v1/users/all').then(function(response) {
            return response.data.users;
        });
    };

    self.deleteUser = function(user_id) {
        return $http.post('/api/v1/users/' + user_id + '/delete').then(function(response) {
            return response;
        });
    };

    self.getUserByUsername = function(username) {
        return $http({
            method: "GET",
            url: "/api/v1/users/",
            params: {'username': username}
        }).then(function(response){
            return response.data.user;
        }, function(error) {
            return error;
        });
    };
}])

.factory('User',
['$http', '$q', '$state', '$rootScope', 'EVENTS', '$cookies', 'cookieHandler',
function($http, $q, $state, $rootScope, EVENTS, $cookies, cookieHandler) {
    function User() {
        var self = this;
        self.userData = null;

        self.getCurrentUser = function() {
            var deferred = $q.defer();
            if(self.userData !== null) {
                deferred.resolve(self.userData);
            } else if($cookies.getObject('user')) {
                self.userData = $cookies.getObject('user');
                deferred.resolve(self.userData);
            } else if($cookies.get('user_token')) {
                $http.get('/api/v1/users/current').then(function(response) {
                    self.userData = response.data.user;
                    deferred.resolve(response.data);
                }, function(err) {
                    self.userData = null;
                    deferred.reject(err);
                });
            } else {
                deferred.reject(EVENTS.notAuthenticated);
                self.userData = null;
            }

            return deferred.promise;
        };

        self.getUserRoles = function() {
            return self.userData.roles;
        };

        self.getPriceSubmissions = function(user_id) {
            var deferred = $q.defer();
            $http.get('api/v1/users/' + user_id + '/submissions').then(function(response) {
                deferred.resolve(response.data.user_submissions);
            }, function(err) {
                deferred.reject('api error');
            });
            return deferred.promise;
        };

        self.getVotingHistory = function(user_id) {
            return $http.get('api/v1/users/' + user_id + '/voting-history').then(function(response) {
                return response.data.voting_history;
            });
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
        };

        self.isAuthorized = function(authorizedRoles) {
            var isAuthorized = true;
            if(self.isAuthenticated()) {
                if(!angular.isArray(authorizedRoles)) {
                    authorizedRoles = [authorizedRoles];
                }

                self.getUserRoles().forEach(function(value, index) {
                    console.log(authorizedRoles);
                    console.log(value, authorizedRoles.indexOf(value));
                    if(authorizedRoles.indexOf(value) === -1) {
                        isAuthorized = false;
                    }
                });
            } else {
                isAuthorized = false;
            }

            return isAuthorized;
        };

        self.isAdmin = function(user) {
            return user.roles.indexOf('admin') !== -1;
        };

        self.login = function(credentials) {
            return $http({
                method: 'POST',
                url: 'api/v1/users/login',
                data: credentials,
                headers: {'Content-Type': 'application/json'}
            }).then(function(response) {
                if(response.data['error']) {
                    return response.data;
                } else {
                    $cookies.putObject('user', response.data.user, {
                        expires: cookieHandler.getExpireDate()
                    });
                    self.userData = response.data.user;
                    $rootScope.$broadcast(EVENTS.loginSuccess);
                    $state.go('home');
                    return response.data;
                }

            });
        };

        self.logout = function() {
            return $http.post('/api/v1/users/logout').then(function(response) {
                cookieHandler.removeAllUserCookies();
                self.userData = null;
                $rootScope.$broadcast(EVENTS.logoutSuccess);
                $state.go('login');
                return response.data;
            });
        };

        self.sendPasswordResetCode = function(email) {
            return $http.post('/api/v1/users/' + email + '/send-reset-code').then(function(response) {
                return response;
            });
        };

        self.resetPassword = function(reset_code, new_password) {
            return $http({
                method: 'POST',
                url: '/api/v1/users/reset-password',
                data: {'reset_code': reset_code, 'new_password': new_password},
            }).then(function(response) {
                return response;
            });
        }

        self.changePassword = function(user_id, new_password) {
            return $http({
                method: 'POST',
                url: '/api/v1/users/' + user_id + '/change-password',
                data: {'new_password': new_password},
            }).then(function(response) {
                return response;
            });
        };

        self.alterUser = function(user) {
            return $http({
                method: 'POST',
                url: '/api/v1/users/alter',
                data: {
                    'user_id': user.user_id,
                    'first_name': user.first_name,
                    'email': user.email,
                    'roles': user.roles
                }
            }).then(function(response) {
                return response;
            })
        };
    }

    return new User();
}])

.service('cookieHandler', ['$cookies', function($cookies) {
    'use strict';
    var self = this;

    self.getExpireDate = function() {
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        expireDate.setHours(expireDate.getHours() - 5);
        return expireDate;
    };

    self.removeAllUserCookies = function() {
        ['user', 'username', 'user_token'].forEach(function(value, index) {
            $cookies.remove(value);
        });
    };
}])

.service('geolocationService', ['$q', '$window', function ($q, $window) {
    'use strict';
    var self = this;
    self.currentPosition = null;

    self.getCurrentPosition = function() {
        var deferred = $q.defer();
        var coordinates = JSON.parse($window.sessionStorage.getItem('coordinates'));

        if(!$window.navigator.geolocation) {
            deferred.reject('Geolocation not supported.');
        }

        if(self.currentPosition !== null) {
            deferred.resolve(self.currentPosition);
        } else if(coordinates) {
            self.currentPosition = coordinates;
            deferred.resolve(self.currentPosition);
        } else {
            $window.navigator.geolocation.getCurrentPosition(function(position) {
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

    this.truncateString = function(str, max, add) {
        add = add || '...';
        return (typeof str === 'string' && str.length > max ? str.substring(0,max)+add : str);
    };
})

.service('utilityService', function() {
    var self = this;

    self.resizeArray = function(array, newLength) {
        //array = array.splice(5, )
        //return array;
    };

    self.removeMatchFromArray = function(key, array) {
        for(var i = 0; i < array.length; i++) {
            if(key === array[i][key]) { //this doesn't make sense, need to pass in value not key
                array.splice(i, 1);
            }
        }
        return array;
    };

    self.arrayOfObjValues = function(key, arrayOfObjects) {
        var newArray = [];
        for(var i = 0; i < arrayOfObjects.length; i++) {
            newArray.push(arrayOfObjects[i][key]);
        }
        return newArray;
    };

    self.dedupe = function(array) {
        return uniqueArray = array.filter(function(item, pos) {
            return array.indexOf(item) == pos;
        });
    };

    self.getUniqueArray = function(key, array) {
        return self.dedupe(self.arrayOfObjValues(key, array));
    };

    self.mergeObjects = function(obj1, obj2) {
        for(var key in obj2) {
            obj1[key] = obj2[key];
        }
        return obj1;
    };

    //Base array as in main loop, arrayToCompare as in inner loop
    self.compareAndMergeObjectsByKey = function(keyToCompare, baseArray, arrayToCompare) {
        var mergedObjects = [];
        for(var i = 0; i < baseArray.length; i++) {
            for(var j = 0; j < arrayToCompare.length; j++) {
                if(baseArray[i][keyToCompare] === arrayToCompare[j][keyToCompare]) {
                    var mergedObject = self.mergeObjects(baseArray[i], arrayToCompare[j]);
                    mergedObjects.push(mergedObject);
                }
            }
        }
        return mergedObjects;
    };

    self.filterOCRArray = function(ocrArray) {
        var newArray = []
        var keys = ['description', 'price'];
        for(var i = 0; i < ocrArray.length; i++) {
            var ocrObj = self.toObject(ocrArray[i], keys);
            newArray.push(ocrObj);
        }
        console.log(newArray);
        return newArray;
    };

    self.toObject = function(array, keys) {
        var obj = {};
        for(var i = 0; i < array.length; ++i) {
            obj[keys[i]] = array[i];
        }
        return obj;
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
