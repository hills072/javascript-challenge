//console.log("app.js loaded")

// Define variables for dataset; button, form, inputfield, and body selectors
var tableData = data;
var button = d3.select("#filter-btn");
var form = d3.select("form");
var inputField = d3.select("#datetime");
var tbody = d3.select("tbody");

// Loop through dataset and dynamically create a new row for each element and add that element's data to that row in the HTML table
var insertData = tableData.forEach(function(ufoDataElement) {
    
    var row = tbody.append("tr");
    Object.entries(ufoDataElement).forEach(function([key, value]) {
        row.append("td").text(value);
    });
});

// Create function to handle a click or 'enter' on the 'filter table button'
// Filter the data based on the input value, clear the table, and rebuild the table based on the input value
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

// When a click or submit is detected, run the above function to process it
button.on("click", handleEvent);
form.on("submit", handleEvent);