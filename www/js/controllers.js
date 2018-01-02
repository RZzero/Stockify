angular.module('starter.controllers', ['ui.router', 'starter.services'])

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

.controller('OverviewCtrl', function($scope,companies) {

  $scope.companies = companies;
  $scope.toggleFavorite = function(index) {
    $scope.companies[index].favorite = !$scope.companies[index].favorite;
  };

})

.controller('SettingsCtrl',function($scope,currencies,languages){

  $scope.currencies = currencies;
  $scope.languages = languages;
})

.controller('SplashScreen',function($scope,currencies){
  
    $scope.currencies = currencies;
  
  })

.controller('CharCtrl', function($scope, $element) {
  var ctx = $element[0];

  if (ctx == null) {
    return;
  }

  var myChart = new Chart(ctx, {
  type: 'line',
  data: {
  labels: ["01/01", "02/01", "03/01", "04/01", "05/01"],
  datasets: [{
      label: 'Actions',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
      fill: false,
  }]
  },
  options: {
  scales: {
      yAxes: [{
          ticks: {
              beginAtZero:true
          }
      }]
  }
  }
  });
});
