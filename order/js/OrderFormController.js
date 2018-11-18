function OrderFormController () { //static list of products or data driven products
  this.products = [{
    label: 'Product One',
    id: 1
  }, {
    label: 'Product Two',
    id: 2
  }, {
    label: 'Product Three',
    id: 3
  }];
  this.onSubmit = function () { //local function to parent onSubmit function for the delegating form
    //to pass in a custom submit function from the parent controller
    //we can call the parent controller function from delegating form function - the reason could be pre-processing
    this.submit(); //once this function is called the customerOrder object will be fully uptodate with all the validated customerObjects
  };
}

angular
  .module('app')
  .controller('OrderFormController', OrderFormController);