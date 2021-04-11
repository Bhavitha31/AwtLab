function fetchWeather(){
    var request =new XMLHttpRequest();
    var apiKey = '9fb82d0e0fe0ff095292a5cc8c93ee8c'
    var city = document.getElementById("city").value;
    var url= `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    request.open('GET',url,true);
    request.onload = function(){
        var result = JSON.parse(this.response)
        table = document.createElement("table");
        table.border = "1"
        table.align = "center"
        row = table.insertRow(-1)
        cellH1 = row.insertCell(-1)
        cellH2 = row.insertCell(-1)
        cellH3 = row.insertCell(-1)
        cellH1.innerHTML = "DATE&TIME"
        cellH2.innerHTML = "MIN_TEMPERATURE"
        cellH3.innerHTML = "MAX_TEMPERATURE"
        result.list.forEach((day) =>{
            row1 = table.insertRow(-1);
            cell1 = row1.insertCell(-1);
            cell2 = row1.insertCell(-1);
            cell3 = row1.insertCell(-1);
            cell1.innerHTML = day.dt_txt;
            cell2.innerHTML = day.main.temp_max;
            cell3.innerHTML = day.main.temp_min;
            console.log(day)
        })
        document.getElementById("tempDisplay").append(table)
        
    }
    request.send();
}