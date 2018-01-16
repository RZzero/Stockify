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
    {
        currencyCode: "BTC",
        currencyName: "Bitcoin",
     },  
  ]
})

.factory('languages',function() {
    return [
      {
         languageName: "English",
      },
      {
        languageName: "Español",
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
       favorite:false,
       stocks:0,
       firstTimeBuying:false,
    },
    {
        companyCode: "AAPL",
        companyName: "Apple Inc.",
        comercialName: "Apple",
        imgUrl: "",
        favorite:false,
        stocks:0,
        firstTimeBuying:false,
    },
    {
        companyCode: "AMZN",
        companyName: "Amazon.com Inc.",
        comercialName: "Amazon",
        imgUrl: "",
        favorite:false,
        firstTimeBuying:false,
    },    
    {
        companyCode: "NTDOY",
        companyName: "Nintendo Co. Ltd. ADR",
        comercialName: "Nintendo",
        imgUrl: "",
        stocks:0,
        firstTimeBuying:false,
     },
     {
         companyCode: "SSNLF",
         companyName: "Samsung Electronics Co. Ltd.",
         comercialName: "Samsung",
         imgUrl: "",
         favorite:false,
         stocks:0,
         firstTimeBuying:false,
     },
     {
         companyCode: "TSLA",
         companyName: "Tesla Inc.",
         comercialName: "Tesla",
         imgUrl: "",
         stocks:0,
         firstTimeBuying:false,
     },    
     {
        companyCode: "SNAP",
        companyName: "Snap Inc.",
        comercialName: "Snapchat",
        imgUrl: "",
        favorite:false,
        stocks:0,
        firstTimeBuying:false,
     },
     {
         companyCode: "GOOGL",
         companyName: "Alphabet Inc. Cl A",
         comercialName: "Google (Alphabet)",
         imgUrl: "",
         favorite:false,
         stocks:0,
         firstTimeBuying:false,
     },
     {
         companyCode: "NVDA",
         companyName: "NVIDIA Corp.",
         comercialName: "NVIDIA",
         imgUrl: "",
         favorite:false,
         stocks:0,
         firstTimeBuying:false,
     },    
     {
        companyCode: "INTC",
        companyName: "Intel Corp.",
        comercialName: "INTEL",
        imgUrl: "",
        favorite:false,
        stocks:0,
        firstTimeBuying:false,
     },
     {
         companyCode: "AMD",
         companyName: "Advanced Micro Devices Inc.",
         comercialName: "AMD",
         imgUrl: "",
         favorite:false,
         stocks:0,
         firstTimeBuying:false,
     },
     {
         companyCode: "GPRO",
         companyName: "GoPro Inc.",
         comercialName: "GoPro",
         imgUrl: "",
         favorite:false,
         stocks:0,
         firstTimeBuying:false,
     },
     {
        companyCode: "GRMN",
        companyName: "Garmin Ltd.",
        comercialName: "Garmin",
        imgUrl: "",
        favorite:false,
        stocks:0,
        firstTimeBuying:false,
     },
  ]
});