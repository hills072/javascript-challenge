//console.log("app.js loaded")

var button = d3.select("#filter-btn");

var inputField = d3.select("#datetime");


function handleClick() {

    var inputValue = inputField.property("value");
    console.log("A button was clicked!");
    console.log(inputValue);
  
    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);
  }
  
  // We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);






var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(ufoData) {
    
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
 
});