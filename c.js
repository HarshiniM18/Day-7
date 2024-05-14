var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    const result = JSON.parse(request.response);
    console.log(result);
    result.forEach(function(country) {
        console.log("Name:", country.name.common); 
        console.log("Capital:", country.capital);
        console.log("Flag:", country.flags.svg);
    });
}
