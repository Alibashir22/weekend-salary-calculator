console.log("Hello world");
let totalSalary = 0;

function onReady() {
    document.getElementById('submitButton').addEventListener('click', submitEmployee);
}

function submitEmployee(event) {
    event.preventDefault();
    console.log("Clicked submit");
    let firstNameElement = document.getElementById("firstNameInput");
    let lastNameElement = document.getElementById("lastNameInput");
    let idElement = document.getElementById("idInput");
    let titleElement = document.getElementById("titleInput");
    let annualSalaryElement = document.getElementById("annualSalaryInput");

    let tableBody = document.querySelector("tbody");
    tableBody.innerHTML += `
        <tr>
            <td>${firstNameElement.value}</td>
            <td>${lastNameElement.value}</td>
            <td>${idElement.value}</td>
            <td>${titleElement.value}</td>
            <td class="salary">${annualSalaryElement.value}</td>
            <td><button onclick="deleteEmployee(event)">Delete</button></td>
        </tr>
    `;

    calculateTotalSalary();

    firstNameElement.value = "";
    lastNameElement.value = "";
    idElement.value = "";
    titleElement.value = "";
    annualSalaryElement.value = "";
}

function deleteEmployee(event) {
    event.target.parentElement.parentElement.remove();
    calculateTotalSalary();
}

function calculateTotalSalary() {
    totalSalary = 0;
    const allSalaries = document.getElementsByClassName("salary");
    for (let index = 0; index < allSalaries.length; index++) {
        const element = allSalaries[index];
        totalSalary += Number(element.textContent);
    }

    const totalMonthlyCost = document.getElementById("totalMonthlyCost");
    const monthlyTotal = totalSalary / 12;
    totalMonthlyCost.innerHTML = `Total Monthly Cost: ${monthlyTotal}`;

    const footer = document.getElementById("footer");
    if (monthlyTotal > 20000) {
        footer.classList.add("over-budget");
    } else {
        footer.classList.remove("over-budget");
    }
}

onReady();
