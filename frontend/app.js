require('angular');

angular.module('savvy', [require('angular-ui-router')])

    .run(['$rootScope', function($rootScope){
        $rootScope.$on('$stateChangeStart',['event', 'toState', 'toParams', 'fromState', function(event, toState, toParams, fromState){
            $rootScope.title = "Savvy | " + toState.title;
        }]);
    }]);

require('bulk-require')(__dirname, ['./assets/*/*.js', './components/**/*.js']);
