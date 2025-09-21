// =============================
// Registration Form Handling
// =============================
function handleRegistration(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Save to localStorage as array
  let registrations = JSON.parse(localStorage.getItem("registrations")) || [];
  registrations.push({ name, email, message, date: new Date().toLocaleString() });
  localStorage.setItem("registrations", JSON.stringify(registrations));

  alert("Registration saved successfully!");
  document.getElementById("registrationForm").reset();
}

// Admin page display
function displayRegistrations() {
  const tableBody = document.getElementById("registrationTableBody");
  const registrations = JSON.parse(localStorage.getItem("registrations")) || [];

  tableBody.innerHTML = "";
  registrations.forEach((reg, index) => {
    const row = `<tr>
      <td>${index+1}</td>
      <td>${reg.name}</td>
      <td>${reg.email}</td>
      <td>${reg.message}</td>
      <td>${reg.date}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

// Call this on admin page load
if (document.getElementById("registrationTableBody")) {
  displayRegistrations();
}
// =============================