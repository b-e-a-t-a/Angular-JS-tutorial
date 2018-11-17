function UserService($http) {
  const prefix = 'https://cors-anywhere.herokuapp.com/';
  const API = '//jsonplaceholder.typicode.com/users/';

  function getUser(userId) {
    return $http
      .get(prefix + API + userId)
      .then(function (response) {
        return response.data;
      }, function (reason) {
      })
  }
  function getAllUsers() {

  }

  return {
    getUser: getUser,
    getAllUsers: getAllUsers
  };
}

angular
  .module('app')
  .factory('UserService', UserService);
