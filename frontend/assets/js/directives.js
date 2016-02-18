angular.module('savvy').directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);

/*.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.fileread = changeEvent.target.files[0];
                    // or all selected files:
                    // scope.fileread = changeEvent.target.files;
                });
            });
        }
    }
}]);*/

//Addresses usability issue on phones (just iOS?) where keyboard does not dismiss after form submit
angular.module('savvy').directive('handleSubmit', function () {
    return function (scope, element, attr) {
        var textFields = element.find('input');

        element.bind('submit', function() {
            textFields[0].blur();
        });
    };
});

//http://jsfiddle.net/lsconyer/bktpzgre/1/
angular.module('savvy').directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});

angular.module('savvy').directive('googleChart', ['googleService', function(googleService) {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            scope.options = {
                curveType: attrs.curveType,
                legend: { position: attrs.legend }
            }
            scope.data = attrs.chartData;
            console.log(googleService.getVis());
            googleService.getVis().then().arrayToDataTable();
            var data = googleService.get().visualization.arrayToDataTable(attrs.chartData);
            var chart = new google.visualization.LineChart(element);
            chart.draw(data, options);
            $scope.status.chart = 'ready';
        }
    }
    google.charts.setOnLoadCallback(function(){

        var options = {
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('prices-graph'));
        chart.draw(data, options);
        $scope.status.chart = 'ready';
    });
}]);

/*angular.module('savvy').directive('googleChart', function() {
    return {
        restrict: 'E',
        scope: {
            text: '='
        },
        template: '<div>'
    }
});*/
