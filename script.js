function storeFormData() {
    // Get form data
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var foodItems = [];
    var foodCheckboxes = document.getElementsByName("food");
    for (var i = 0; i < foodCheckboxes.length; i++) {
        if (foodCheckboxes[i].checked) {
            foodItems.push(foodCheckboxes[i].value);
        }
    }
    var pincode = document.getElementById("pincode").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    // Create a new row in the table
    var tableRef = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    var newRow = tableRef.insertRow();

    // Insert cells in the row
    var firstNameCell = newRow.insertCell(0);
    var lastNameCell = newRow.insertCell(1);
    var genderCell = newRow.insertCell(2);
    var addressCell = newRow.insertCell(3);
    var foodCell = newRow.insertCell(4);
    var pincodeCell = newRow.insertCell(5);
    var stateCell = newRow.insertCell(6);
    var countryCell = newRow.insertCell(7);

    // Append data to cells
    firstNameCell.appendChild(document.createTextNode(firstName));
    lastNameCell.appendChild(document.createTextNode(lastName));
    genderCell.appendChild(document.createTextNode(gender));
    addressCell.appendChild(document.createTextNode(address));
    foodCell.appendChild(document.createTextNode(foodItems.join(", ")));
    pincodeCell.appendChild(document.createTextNode(pincode));
    stateCell.appendChild(document.createTextNode(state));
    countryCell.appendChild(document.createTextNode(country));

    // Clear form data
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("gender").value = "male";
    document.getElementById("address").value = "";
    for (var i = 0; i < foodCheckboxes.length; i++) {
        foodCheckboxes[i].checked = false;
    }
    document.getElementById("pincode").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
} 