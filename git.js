function getRepository()
{
    var request=new XMLHttpRequest();
    var uname=document.getElementById("uname").value;
    var url= `https://api.github.com/users/${uname}/repos`;
    request.open('GET',url,true);
    request.onload=function(){
        var res = JSON.parse(this.response);
        var temp = document.getElementById("temp");
        table = document.createElement("table");
        table.border = "1";
        table.width = "100%";
        table.align = "center";
        row = table.insertRow(-1)
        cellH1 = row.insertCell(-1)
        cellH2 = row.insertCell(-1)
        cellH3 = row.insertCell(-1)
        cellH1.innerHTML = "Owner";
        cellH2.innerHTML = "RID"
        cellH3.innerHTML = "Repository Name";
        res.forEach((ele) => {
                row1 = table.insertRow(-1)
                cell1 = row1.insertCell(-1)
                cell2 = row1.insertCell(-1)
                cell3 = row1.insertCell(-1)
                cell1.innerHTML = ele.owner.login;
                cell2.innerHTML = ele.id;
                cell3.innerHTML = ele.name;
                console.log(ele)
        })
        temp.append(table);
    }
    request.send();
}