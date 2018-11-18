function OrderController () {
  this.customerOrder = { //info to delegate down into the HTML form
    name: '',
    email: '',
    location: '',
    product: {
      label: '',
      id: ''
    },
    comments: ''
  };
  this.submitOrder = function () {
    //communicate with API, backend
    //flow:
//we have a top-level OrderController, we pass it data that we want called customerOrder into the delegating form
//the form would then manipulate the data and when we submit inside the other form directive, we can then call this parent submitOrder
    console.log('Submited');
  };
}

angular
  .module('app')
  .controller('OrderController', OrderController);

