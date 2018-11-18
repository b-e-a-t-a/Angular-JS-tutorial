function OrderController () {
  this.orderQuantity = 5;
}

angular
  .module('app')
  .controller('OrderController', OrderController);