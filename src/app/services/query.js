angular.module('wiki-discoverer')
.factory('query',[function(){
  var obj = {} ;
  obj.search = "wassup" ;
  obj.random = "hey yo!" ;
  obj.setQuery = function(query){
    obj.search = query ;
    //console.log(obj.search);
  };
  return obj ;
}]);
