app.config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise("/");
   
    $stateProvider
      .state('home', {
          url: "/",
          views: {
              'head': {
                  templateUrl: 'app/components/home/head.html',
                  controller: 'HomeHeadController'
              },
              'content': {
                  templateUrl: 'app/components/home/content.html',
                  controller: 'HomeContentController'
              }
          }
      }).state('registration', {
          url: "/registration/:event",
          views: {
              'head': {
                  templateUrl: 'app/components/registration/head.html',
                  controller: 'RegistrationHeaderController'
              },
              'content': {
                  templateUrl: 'app/components/registration/content.html',
                  controller: 'RegistrationContentController'
              }
          }
      });
});