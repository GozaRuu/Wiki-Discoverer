angular.module('wiki-discoverer')
.controller('wikipage',[
  '$scope', '$routeParams', 'search', function($scope, $routeParams, search){
    // var data = search.getDataById($routeParams.suggId) ;
    // $scope.id = data.id ;
    // $scope.title = data.title ;
    // $scope.longDescription = data.longDescription ;
    // $scope.icon = data.icon ;

    //this should be put in services/search
    var images = {
      main : {
        link: 'someshit.jpg',
        alt: 'some shit'
      },
      optionals: {

      }
    }
  }
]);
