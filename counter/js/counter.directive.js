function counter() {
  return {
    scope: {}, //each one has its own scope
    restrict: 'E', //custom element
    controller: 'CounterController as counter', //instead of ng-controller we can bind it straight here
    template: `
      <div class="counter">
        <input type="text" ng-model="counter.count">
        <button type="button" ng-click="counter.decrement();">
          -
        </button>
        <button type="button" ng-click="counter.increment();">
          +
        </button>
      </div>
    `
  };
}

angular
  .module('app')
  .directive('counter', counter);


