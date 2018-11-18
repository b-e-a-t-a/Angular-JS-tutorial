function CounterController ($scope) {
  console.log($scope);
  this.count = $scope.count;
  this.increment = function () {
    this.count++;
  }
  this.decrement = function () {
    this.count--;
  }
}

angular
  .module('app')
  .controller('CounterController', CounterController);