angular.module('wiki-discoverer')
.controller('landing', ['$scope', 'query', function ($scope,query){
  $scope.search = query.search ;
  $scope.setSearch = function(){
    query.setQuery($scope.search);
  }
  angular.element(document.querySelectorAll(".search-wrapper")).on('focus', function () {
    console.log('in search wrapper');
	   angular.element(document.querySelectorAll(".search")).addClass('active');
  });
  angular.element(document.querySelectorAll(".search-wrapper input")).on('blur', function () {
  	if(angular.element(document.querySelectorAll(".search-wrapper input")).val().length == 0)
  		angular.element(document.querySelectorAll(".search-wrapper input")).removeClass('active');
  });
}]);
