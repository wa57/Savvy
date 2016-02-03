var app = angular.module('savvy', ['ui.router']);

app.run(function($rootScope){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState){
        $rootScope.title = "Savvy | " + toState.title;
    });

    google.charts.load('current', {packages: ['corechart']});
});
