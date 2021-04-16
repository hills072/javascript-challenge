//console.log("app.js loaded")

var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(ufoData) {
    
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
 
});