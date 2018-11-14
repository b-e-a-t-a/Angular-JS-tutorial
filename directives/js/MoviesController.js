function MoviesController() {
  this.likesList = [];
  this.unlike = function (index) {
    this.likesList.splice(index, 1)
  }
  this.addToLikes = function (movie) {
    this.likesList.push(movie);
  };
  this.favorites = [{
    title: "Shawshank",
    year: "1994",
    popular: true,
    category: 'thriller'
  },{
    title: "Inception",
    year: "2010",
    popular: false,
    category: 'fantasy'
  },{
    title: "The Matrix",
    year: "1999",
    popular: true,
    category: 'fantasy'
  },{
    title: "Saving Private",
    year: "1998",
    popular: true,
    category: 'action'
  }];
}

angular
  .module('app')
  .controller('MoviesController', MoviesController);
