angular.module('starter.services', [])

.factory('currencies',function() {
  return [
    {
       currencyCode: "USD",
       currencyName: "United States Dollar",
    },
    {
       currencyCode: "DOP",
       currencyName: "Dominican Peso",
    },
    {
       currencyCode: "EUR",
       currencyName: "Euro",
    },
  ]
});
