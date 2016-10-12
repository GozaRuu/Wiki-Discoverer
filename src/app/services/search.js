angular.module('wiki-discoverer')
.factory('search',[function(){
  var obj = {} ;
  obj.getDataById = function(id){
    return obj.data[id] ;
  }
  obj.data = [
    {
      id: 0,
      icon: {
        link: 'img1.jpg',
        alt: 'pink guy'
      },
      title: 'Pink Guy',
      description: 'some moofakaa',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      id: 1,
      icon: {
        link: 'img3.png',
        alt: 'filthy'
      },
      title: 'Filthy Frank',
      description: 'Filth generator',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      id: 2,
      icon: {
        link: 'img2.png',
        alt: 'red dick'
      },
      title: 'Red Dick',
      description: 'some japanese moofakaa',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    }
  ] ;

  return obj ;
}]);
