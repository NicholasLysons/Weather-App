var APIKEY ="48b65b00c9d41008bc1bb8ebf7388640"

function getApi() {

    var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q={city}';

    fetch(requestUrl)
    .then(function(response){
        return response.json()
    });
}


