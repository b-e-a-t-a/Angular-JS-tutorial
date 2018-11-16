function UserController($http) {
  var ctrl = this;
  var prefix = "https://cors-anywhere.herokuapp.com/";
  const API = '//jsonplaceholder.typicode.com/users/';
  this.userId = '';
  this.chosenUser = {};
  this.getUser = function () {
    if (!this.userId) {
      return;
    }
    $http
      .get(prefix + API + this.userId)
      .then(function (response) {
        console.log(response);
        ctrl.chosenUser = response.data;
      }, function (reason) {
      })
  };
}

angular
  .module('app')
  .controller('UserController', UserController);
