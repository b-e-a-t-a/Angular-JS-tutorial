function CounterController () {
  this.count = 1; //initial count value
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