var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["month"] = document.getElementById("month").value;
    formData["assigned"] = document.getElementById("assigned").value;
    formData["department"] = document.getElementById("department").value;
    formData["remarks"] = document.getElementById("remarks").value;
    formData["devicenumber"] = document.getElementById("devicenumber").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.month;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.assigned;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.department;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.remarks;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.devicenumber;
    cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("month").value = selectedRow.cells[0].innerHTML;
    document.getElementById("assigned").value = selectedRow.cells[1].innerHTML;
    document.getElementById("department").value = selectedRow.cells[2].innerHTML;
    document.getElementById("remarks").value = selectedRow.cells[3].innerHTML;
    document.getElementById("devicenumber").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.month;
    selectedRow.cells[1].innerHTML = formData.assigned;
    selectedRow.cells[2].innerHTML = formData.department;
    selectedRow.cells[3].innerHTML = formData.remarks;
    selectedRow.cells[3].innerHTML = formData.devicenumber;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("month").value = '';
    document.getElementById("assigned").value = '';
    document.getElementById("department").value = '';
    document.getElementById("remarks").value = '';
    document.getElementById("devicenumber").value = '';
    selectedRow = null;
}