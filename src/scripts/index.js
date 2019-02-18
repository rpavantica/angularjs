var myApp = angular.module('myApp', []);

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
    link: (scope, elements, attrs) => {
      console.log('Linkinging');
      console.log(elements); 
      console.log(scope);
      if (scope.personObject.firstName == 'gitza') {
        elements.attr('class', 'blue');
      }
    },
  }        
});

// const pp = "test";
// const ppTest = (pp) => {
//   console.log(pp);
// }

// ppTest(pp);
