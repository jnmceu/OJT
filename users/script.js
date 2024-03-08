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
    formData["idnumber"] = document.getElementById("idnumber").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["firstname"] = document.getElementById("firstname").value;
    formData["email"] = document.getElementById("email").value;
    formData["password"] = document.getElementById("password").value;
    formData["status"] = document.getElementById("status").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.idnumber;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.firstname;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.password;
    cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.status;
    cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("idnumber").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("firstname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("password").value = selectedRow.cells[4].innerHTML;
    document.getElementById("status").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.idnumber;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.firstname;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.password;
    selectedRow.cells[5].innerHTML = formData.status;
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
    document.getElementById("idnumber").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("firstname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
    document.getElementById("email").value = '';
    selectedRow = null;
}