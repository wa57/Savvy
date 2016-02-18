angular.module('savvy')
    .controller('home_controller', home_controller)
    .$inject = ['$scope', '$state', 'Session'];

function home_controller($scope, $state, Session) {
    var userData = Session.getUserData();
    console.log(userData);
}
