var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    result.forEach(myFunction);
    function myFunction(res) {

    console.log(res.name); 
    console.log(res.capital);
    console.log(res.flag);

}
}