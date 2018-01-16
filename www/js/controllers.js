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

.controller('OverviewCtrl', function($scope,companies,$ionicHistory, $state) {

  $scope.companies = companies;
  $scope.toggleFavorite = function(index) {
    $scope.companies[index].favorite = !$scope.companies[index].favorite;
  };

  var navOptions = {
    disableBack: false,
    disableAnimate: false
  };

  // $scope.gotDetail = function() {
  //   $state.go('detail');

  // };

})

.controller('CharCtrl', function($scope, $element,$http) {
  
  let APIKey = "6318";
  var queryStringForCompany = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol="+ $scope.company.companyCode +"&outputsize=compact&apikey="+APIKey;
  
  var ctx = $element[0];

  $http.get(queryStringForCompany)       
    .success(function(data) {

      //Acá obtengo la información Time Series Daily de los ultimos 7 días la compañía
      let companyTimeSeries = data['Time Series (Daily)'];

      var values = [];
      var dates = [];
      var limit = 0;
      for (var key in companyTimeSeries) {
          var stock = new Object();
          values.push(Number(companyTimeSeries[key.toString()]['4. close']));
          dates.push(key.toString());


          limit++;
          if(limit == 7)break;
      }

      //Styling the header
      $scope.company.date = dates[0];

      if(values[0]-values[1] >= 0){
        $scope.company.gain ="+" + (values[0]-values[1]).toString().substring(0,4);
      }else{
        $scope.company.gain =(values[0]-values[1]).toString().substring(0, 4);
      }

      //Getting data for filling the chart
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
        labels: dates.reverse(),
        datasets: [{
            label: 'Stocks',
            data: values.reverse(),
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            fill: false,
        }]
        },
      
        options: {
        scales: {
            yAxes: [{
                ticks:  {
                  //Esto es para buscar el mejor espaciado entre los puntos del eje Y
                  //Lo correcto es sacar la desviacion estandar pero por ahora estoy usando los ultimos dos puntos
                  // fixedStepSize: 0.9
              }
            }]
        }
        }
        });
    })

    .error(function(data) {
        alert("There was a problem retrieving data, please check your internet connection");
  });

  if (ctx == null) {
    return;
  }
})

.controller('SettingsCtrl',function($scope,currencies,languages){

  $scope.currencies = currencies;
  $scope.languages = languages;
})

.controller('help',function($scope){
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
  });
})

.controller('SplashScreen',function($scope,currencies){

    $scope.currencies = currencies;
});


