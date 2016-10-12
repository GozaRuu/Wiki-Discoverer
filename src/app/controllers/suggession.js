angular.module('wiki-discoverer')
.controller('suggession', ['$scope', 'query', 'search', function($scope, query, search){
  $scope.search = query.search ;
  $scope.suggessions = search.data ;
}]);
