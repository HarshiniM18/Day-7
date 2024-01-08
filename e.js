var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    var res = result.filter((ele)=>ele.currencies=="USD")
    console.log(res)
    var c = res.map((ele)=>ele.name)
    console.log(c)
}