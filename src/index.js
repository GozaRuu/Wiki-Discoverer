angular.module('wiki-discoverer', ['ngRoute']);

angular.module('wiki-discoverer')
.config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
      //$locationProvider.hashPrefix('!');
      $routeProvider.when('/',{
          templateUrl:'app/templates/landing.html'
        }).when('/suggessions', {
          templateUrl: 'app/templates/suggession.html'
        }).when('/suggessions/:suggId',{
          templateUrl: 'app/templates/wikipage.html'
        }).otherwise('/');
    }
]);
