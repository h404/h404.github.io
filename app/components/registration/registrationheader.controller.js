app.controller('RegistrationHeaderController', ['$scope', 'EventServices', '$stateParams', '$localStorage', function ($scope, EventServices, $stateParams, $localStorage) {
    //$scope.eventname = $stateParams.event.name;
    $scope.eventname = $localStorage.EventList[$stateParams.event].name;
}]);