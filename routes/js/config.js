angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', { //definition configuration object
        url: '/',
        controller: 'HomeController as ctrl',
        //we can use templateUrl if we want to reference an HTML file
        template: `
          <p>{{ ctrl.viewName }}</p>
        `
      })
      .state('about', {
        url: '/about',
        controller: 'AboutController as ctrl',
        template: `
          <p>{{ ctrl.viewName }}</p>
        `
      });
      $urlRouterProvider.otherwise('/'); //redirection back to the home state
      //this tells the ui-router to transition over to the initial state called home which has the url '/' if any routes that we hear do not exist
  });


//.config is special method that allows us to create logic that runs when angular loads
//$stateProvider is dependency exposed by the ui router
//$urlRouterProvider - to create our router setup

//at runtime the ui router will dynamically instantiate our controllers against the particular routes
//this allows us to create a dynamic View