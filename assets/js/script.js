    var fetchButton = document.queryElementById('fetch-button');
    
    function getApi() {
        
        const apikey = "48b65b00c9d41008bc1bb8ebf7388640"
        var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
        fetch(requestUrl)
        .then(function(response) {
            return response.json();
    })
    .then(function (data){
            for(var i = 0; i < data.length; i++) {
                var listItem = document.createElement('li')
                listItem.textContext = data[i].html_url;
                repoList.appendChild(listItem);
            }
    });
}
fetchButton.addEventListener('click', getApi);