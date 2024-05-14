fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    
    // Get all the countries with a population of less than 2 lakhs using Filter method
    const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', countriesWithPopulationLessThan2Lakhs);

   
