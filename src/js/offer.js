function addRow() {
    // Get the table body element where the new row will be appended
    var tbody = document.getElementById("tbody");
    // Create a new row element
    var row = document.createElement("tr");
    // Create and append new cells for each column
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
    var cell6 = document.createElement("td");
    var cell7 = document.createElement("td");
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    row.appendChild(cell7);
    // Create and append input elements for each cell
    var input1 = document.createElement("input");
    var input2 = document.createElement("input");
    var input4 = document.createElement("input");
    var input6 = document.createElement("input");
    var input7 = document.createElement("input");
    input1.type = "fname";
    input2.type = "lname";
    input4.type = "title";
    input6.type = "sdate";
    input7.type = "notes";
    input1.placeholder = "First Name";
    input2.placeholder = "Last Name";
    input4.placeholder = "Job Title";
    input6.placeholder = "Start Date";
    input7.placeholder = "Notes";
    cell1.appendChild(input1);
    cell2.appendChild(input2);
    cell4.appendChild(input4);
    cell6.appendChild(input6);
    cell7.appendChild(input7);
    // Create and append a select element for the fourth cell
    var select = document.createElement("select");
    // Create and append two option elements for the select element
    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    var option3 = document.createElement("option");
    option1.value = "";
    option1.text = "";
    option2.value = "Hourly";
    option2.text = "Hourly";
    option3.value = "Salary";
    option3.text = "Salary";
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    cell3.appendChild(select);
    var status = document.createElement("select");
    var statusoption1 = document.createElement("option");
    var statusoption2 = document.createElement("option");
    var statusoption3 = document.createElement("option");
    statusoption1.value = "";
    statusoption1.text = "";
    statusoption2.value = "Accepted";
    statusoption2.text = "Accepted";
    statusoption3.value = "Declined";
    statusoption3.text = "Declined";
    status.appendChild(statusoption1);
    status.appendChild(statusoption2);
    status.appendChild(statusoption3);
    cell5.appendChild(status);
    // Append the new row to the table body
    tbody.appendChild(row);
}

