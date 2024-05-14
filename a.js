var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    const result = JSON.parse(request.response);
    console.log(result);
    const res = result.filter((ele) => ele.continent === "Asia");
    console.log(res);
    const c = res.map((ele) => ele.name.common);
    console.log(c);
}
