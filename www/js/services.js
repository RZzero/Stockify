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
})

.factory('companies',function() {
  return [
    {
       companyCode: "MSFT",
       companyName: "Microsoft Corporation",
       comercialName: "Microsoft",
       imgUrl: "",
    },
    {
        companyCode: "AAPL",
        companyName: "Apple Inc.",
        comercialName: "Apple",
        imgUrl: "",
    },
    {
        companyCode: "AMZN",
        companyName: "Amazon.com Inc.",
        comercialName: "Amazon",
        imgUrl: "",
    },    
    {
        companyCode: "NTDOY",
        companyName: "Nintendo Co. Ltd. ADR",
        comercialName: "Nintendo",
        imgUrl: "",
     },
     {
         companyCode: "SSNLF",
         companyName: "Samsung Electronics Co. Ltd.",
         comercialName: "Samsung",
         imgUrl: "",
     },
     {
         companyCode: "TSLA",
         companyName: "Tesla Inc.",
         comercialName: "Tesla",
         imgUrl: "",
     },    
     {
        companyCode: "SNAP",
        companyName: "Snap Inc.",
        comercialName: "Snapchat",
        imgUrl: "",
     },
     {
         companyCode: "GOOGL",
         companyName: "Alphabet Inc. Cl A",
         comercialName: "Google (Alphabet)",
         imgUrl: "",
     },
     {
         companyCode: "NVDA",
         companyName: "NVIDIA Corp.",
         comercialName: "NVIDIA",
         imgUrl: "",
     },    
     {
        companyCode: "INTC",
        companyName: "Intel Corp.",
        comercialName: "INTEL",
        imgUrl: "",
     },
     {
         companyCode: "AMD",
         companyName: "Advanced Micro Devices Inc.",
         comercialName: "AMD",
         imgUrl: "",
     },
     {
         companyCode: "GPRO",
         companyName: "GoPro Inc.",
         comercialName: "GoPro",
         imgUrl: "",
     },
     {
        companyCode: "GRMN",
        companyName: "Garmin Ltd.",
        comercialName: "Garmin",
        imgUrl: "",
     },
  ]
});