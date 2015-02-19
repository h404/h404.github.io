app.controller('HomeContentController', ['$scope', 'EventServices', '$state', '$localStorage', function ($scope, EventServices, $state, $localStorage) {

    
    $scope.RegisterClicked = function (item) {
        if (item) {
            $state.go('registration', {event:$scope.EventList.indexOf(item)});
        }
    };

    if (!$localStorage.EventList) {
        EventServices.getEventList().then(function (data) {
            if (data) {
                //window.setTimeout(function () {
                //    $scope.$apply(function () {
                        $scope.EventList = $localStorage.EventList = data;
                    //});
                //}, 500);
            }
        });
    }
    else {
        $scope.EventList = $localStorage.EventList;
    }
}]);