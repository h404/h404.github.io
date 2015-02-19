app.controller('RegistrationContentController', ['$scope', 'EventServices', '$stateParams', '$localStorage', '$state', function ($scope, EventServices, $stateParams, $localStorage, $state) {
   
   
    $scope.ShowSuccess = false;
  
    $scope.SubmitClick = function () {

        var email = $scope.email;
        var name = $scope.name;
        try{
            if ($localStorage.EventList[$stateParams.event].count != undefined) {
                $localStorage.EventList[$stateParams.event].count++;
            }
            else {
                $localStorage.EventList[$stateParams.event].count = 1;
            }
        }
        catch (e) {
        }

        EventServices.registerUser({ name: name, email: email, event: $localStorage.EventList[$stateParams.event] });
        $scope.ShowSuccess = true;
        window.setTimeout(function () {
            $state.go('home');
        }, 1500);
    };
}]);