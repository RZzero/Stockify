// Stockify

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

// Set the Stockify's routes.
.config(function($stateProvider, $urlRouterProvider) {

  // Default route.
  $urlRouterProvider.otherwise('/tab/overview');

  // Set the application's routing.
  $stateProvider


  // These are the main three screens.
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tab.html',
  })
  .state('setting', {
    url: '/setting',
    templateUrl: 'templates/setting.html',
    controller: 'SettingsCtrl',
  })
  .state('about-us', {
    url: '/about-us',
    templateUrl: 'templates/about-us.html',

  })


  // These are the routes for the tabs screen.
  .state('tab.overview', {
    url: '/overview',
    views: {
      'tab-overview': {
        templateUrl: 'templates/main-tabs/tab-overview.html',
        controller: 'OverviewCtrl',
      }
    },
  })
  .state('tab.history', {
      url: '/history',
      views: {
        'tab-history': {
          templateUrl: 'templates/main-tabs/tab-history.html',
          controller: 'OverviewCtrl',
        }
      }
    })
    .state('tab.favorite', {
        url: '/favorite',
        views: {
          'tab-favorite': {
            templateUrl: 'templates/main-tabs/tab-favorite.html',
            controller: 'OverviewCtrl',
          }
        }
      })
      .state('tab.win-lose', {
          url: '/win-lose',
          views: {
            'tab-win-lose': {
              templateUrl: 'templates/main-tabs/tab-win-lose.html',
              controller: 'OverviewCtrl',
            }
          }
        });
});
