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
    compile: function(elem, attrs) {
      console.log('Compiling');
      elem.attr('class', 'blue');
     // elem.className = "blue";
      console.log(elem);
      return {
        pre: function(scope, elements, attrs) {
          console.log('pre-linking');
          console.log(elements); 
        },
        post: function(scope, elements, attrs) {
          console.log('post-linking');
          console.log(elements); 
        }
      }        
    }
  }
})

// const pp = "test";
// const ppTest = (pp) => {
//   console.log(pp);
// }

// ppTest(pp);
