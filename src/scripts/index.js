var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);
// 'ngRoute', 'ngResource'

//routes

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider

    // route for the home page
    .when('/page1', {
        templateUrl : 'pages/page-one.html',
        controller  : 'pageOneController'
    })

    // route for the about page
    .when('/page2', {
        templateUrl : 'pages/page-two.html',
        controller  : 'pageTwoController'
    })
}]);


myApp.controller('pageOneController',["$scope",function($scope){
}]);


myApp.controller('pageTwoController',["$scope",function($scope){
}]);

myApp.controller('mainController',["$scope",function($scope){
  $scope.cart = 'empty';
  $scope.people = [
    {
      firstName: 'raphael',
      lastName: 'polniak'
    },
    {
      firstName: 'gitza',
      lastName: 'sandoval'
    },
]
  $scope.parsePerson = (person) => {
     return person.firstName + ' ' + person.lastName;
  }
}]);

myApp.directive("searchResult", function() {
	return {
  	restrict: "E",
  	templateUrl: 'directives/searchresult.html',
   // replace: true,
    scope: {
     personObject: "=",
     parsePersonFunction: "&"
    },
    transclude: true,
    // link: (scope, elements, attrs) => {
    //   console.log('Linkinging');
    //   console.log(elements); 
    //   console.log(scope);
    //   if (scope.personObject.firstName == 'gitza') {
    //     elements.attr('class', 'blue');
    //   }
    // }
  }        
});

// const pp = "test";
// const ppTest = (pp) => {
//   console.log(pp);
// }

// ppTest(pp);
