console.log("app.js loaded")

var tableData = data;
var button = d3.select("#filter-btn");
var form = d3.select("form")
var inputField = d3.select("#datetime");
var tbody = d3.select("tbody");

var insertData = tableData.forEach(function(ufoDataElement) {
    
    var row = tbody.append("tr");
    Object.entries(ufoDataElement).forEach(function([key, value]) {
        row.append("td").text(value);
    });
});

function handleEvent() {

    d3.event.preventDefault();

    var inputValue = inputField.property("value");

    console.log(inputValue)

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData)

    tbody.html("");

    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            row.append("td").text(value);
        });
    });
};

button.on("click", handleEvent);
form.on("submit", handleEvent);