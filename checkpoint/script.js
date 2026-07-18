const nameInput = document.getElementById("name");
const checkinBtn = document.getElementById("checkinBtn");

const attendanceTable = document.getElementById("attendanceTable");

const presentCount = document.getElementById("presentCount");
const absentCount = document.getElementById("absentCount");

let present = 0;
let absent = 0;

checkinBtn.addEventListener("click", () => {

    const name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter a participant name.");
        return;
    }

    const status = document.getElementById("present").checked
        ? "Present"
        : "Absent";

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${status}</td>
    `;

    attendanceTable.appendChild(row);

    if (status === "Present") {
        present++;
        presentCount.textContent = present;
    } else {
        absent++;
        absentCount.textContent = absent;
    }

    nameInput.value = "";
    nameInput.focus();

});