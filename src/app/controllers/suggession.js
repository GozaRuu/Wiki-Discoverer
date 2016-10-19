angular.module('wiki-discoverer')
.controller('suggession', ['$scope','$location', 'query', 'search', function($scope,$location, query, search){
  $scope.search = query.search ;
  $scope.suggessions = search.data ;
  $scope.close = function() {
    $location.path('/') ;
  }
}]);
