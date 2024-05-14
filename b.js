const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    const result = JSON.parse(request.response);
    console.log(result);
    
    // Get all the countries with a population of less than 2 lakhs using Filter method
    const countriesWithPopulationLessThan2Lakhs = result.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', countriesWithPopulationLessThan2Lakhs);
}
