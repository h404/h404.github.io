app.factory('EventServices', function ($http, $q) {

    var getEventList = function () {
        var defer = $q.defer();
        $http.get('EventList.js').success(function (response) {
            defer.resolve(response);
        }).error(function (error) {
            defer.reject(error);
        });

        return defer.promise;
    };

    var registerUser = function (data) {
        //TODO:Service call implementation
    };

    return {
        getEventList: getEventList,
        registerUser: registerUser
    };
});
