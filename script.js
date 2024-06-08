document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var studentId = document.getElementById('studentId').value;
    var studentName = document.getElementById('studentName').value;
    var studentAge = document.getElementById('studentAge').value;
    var studentGrade = document.getElementById('studentGrade').value;

    // Create new table row
    var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    // Insert new cells
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    // Add values to cells
    cell1.innerHTML = studentId;
    cell2.innerHTML = studentName;
    cell3.innerHTML = studentAge;
    cell4.innerHTML = studentGrade;

    // Clear form fields
    document.getElementById('studentForm').reset();
});
