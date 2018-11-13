function MainController() {
  this.name = "Todd";
  //$scope.likes = ["pizza", "cola"];
}

MainController.$inject = ['$scope', '$rootScope'];

angular
  .module('app')
  .controller('MainController', MainController);
