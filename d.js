var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    const result = JSON.parse(request.response);
    console.log(result);
    const totalPopulation = result.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population:", totalPopulation);
}
