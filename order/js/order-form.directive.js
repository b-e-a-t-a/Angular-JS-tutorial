function orderForm() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      data: '=',
      submit: '&' //allows to delegate functions into a directive under specific alias
    },
    controller: 'OrderFormController as form',
    template: `
      <pre>{{ form.data | json }}</pre>
      <form novalidate ng-submit="form.onSubmit();">
        <input type="text" ng-model="form.data.name" placeholder="Your name">
        <input type="email" ng-model="form.data.email" placeholder="Your email">
        <input type="text" ng-model="form.data.location" placeholder="Your location">
        <select>
          <option value="">Select...</option>
        </select>
        <textarea ng-model="form.data.comments" placeholder="Any messages (optional)"></textarea>
        <button type="submit">
          Order
        </button>
      </form>
    `
  };
}

angular
  .module('app')
  .directive('orderForm', orderForm);


