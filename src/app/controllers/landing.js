angular.module('wiki-discoverer')
.controller('landing', ['$scope', 'query', function ($scope,query){
  $scope.search = query.search ;
  $scope.setSearch = function(){
    query.setQuery($scope.search);
  }
}]);
