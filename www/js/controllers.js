angular.module('starter.controllers', ['ui.router'])

.controller('MenuCtrl', function($scope, $ionicHistory, $state) {

  // Disable the back button as well as the view animations.
  var navOptions = {
    disableBack: true,
    disableAnimate: true
  };

  $scope.goMarket = function() {
    $ionicHistory.nextViewOptions(navOptions);
    $state.go('tab.overview');
  }

  $scope.goSettings = function() {
    $ionicHistory.nextViewOptions(navOptions);
    $state.go('setting');
  }

  $scope.goAboutUs = function() {
    $ionicHistory.nextViewOptions(navOptions);
    $state.go('about-us');
  }

})

.controller('Template1Ctrl', function($scope) {
})

.controller('Template2Ctrl', function($scope, $stateParams) {
})

.controller('SettingsCtrl',function($scope,currencies){

  $scope.currencies = currencies;  

});
