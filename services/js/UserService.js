function UserService($http) {
  const prefix = 'https://cors-anywhere.herokuapp.com/';
  const API = '//jsonplaceholder.typicode.com/users/';

  this.getUser = function (userId) {
    return $http
      .get(prefix + API + userId)
      .then(function (response) {
        return response.data;
      }, function (reason) {
      })
  };
}

angular
  .module('app')
  .service('UserService', UserService);
