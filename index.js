const goToDoctorPage = () => {
  window.location.href = "doctor.html"
}

const goToCitizenPage = () => {
  window.location.href = "citizen.html"
}

const openCitizenAppointmentPage = () => {
  const citizenMainPage = document.getElementById("citizen-main-page");
  const citizenAppointmentPage = document.getElementById("citizen-appointment-page");
  citizenMainPage.style.display = "none";
  citizenAppointmentPage.style.display = "block";

  const date = document.getElementById("appointment-date");

  const today = new Date();

  date.min = today.toISOString().split("T")[0];
  date.max = new Date(today.setMonth(today.getMonth() + 1)).toISOString().split("T")[0];
}

const openCitizenVaccinationStatusPage = () => {
  const citizenMainPage = document.getElementById("citizen-main-page");
  const citizenVaccinationStatusPage = document.getElementById("citizen-vaccination-status-page");
  citizenMainPage.style.display = "none";
  citizenVaccinationStatusPage.style.display = "block";
}

const openDoctorAppointmentsPage = () => {
  const doctorMainPage = document.getElementById("doctor-main-page");
  const doctorAppointmentsPage = document.getElementById("doctor-appointments-page");
  doctorMainPage.style.display = "none";
  doctorAppointmentsPage.style.display = "block";
}

const openDoctorVaccinationsPage = () => {
  const doctorMainPage = document.getElementById("doctor-main-page");
  const doctorVaccinationsPage = document.getElementById("doctor-vaccinations-page");
  doctorMainPage.style.display = "none";
  doctorVaccinationsPage.style.display = "block";
}

const openDoctorTimeslotsPage = () => {
  const doctorMainPage = document.getElementById("doctor-main-page");
  const doctorTimeslotsPage = document.getElementById("doctor-timeslots-page");
  doctorMainPage.style.display = "none";
  doctorTimeslotsPage.style.display = "block";
}

const searchForAppointment = () => {
  const date = document.getElementById("appointment-date");
  console.log(new Date(date.value).getTime());

  const searchResultsLabel = document.getElementById("appointment-search-results-label");
  const searchResults = document.getElementById("appointment-search-results");
  const bookAppointment = document.getElementById("book-appointment");
  const updateAppointment = document.getElementById("update-appointment");
  searchResultsLabel.style.display = "block";
  searchResults.style.display = "flex";
  bookAppointment.style.display = "flex";
  updateAppointment.style.display = "flex";
}

const goToBookAppointmentPage = () => {
  const searchForAppointmentPage = document.getElementById("citizen-appointment-page");
  const bookAppointmentPage = document.getElementById("appointment-booking-page");
  searchForAppointmentPage.style.display = "none";
  bookAppointmentPage.style.display = "block";
}

const goToUpdateAppointmentPage = () => {
  const searchForAppointmentPage = document.getElementById("citizen-appointment-page");
  const bookAppointmentPage = document.getElementById("appointment-update-page");
  searchForAppointmentPage.style.display = "none";
  bookAppointmentPage.style.display = "block";
}

const bookAppointment = () => {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const amka = document.getElementById("amka");
  const date = document.getElementById("form-appointment-date");
  const startTime = document.getElementById("appointment-start-time");
  const endTime = document.getElementById("appointment-end-time");
  const doctor = document.getElementById("appointment-doctor");

  console.log(firstName.value)
  console.log(lastName.value)
  console.log(amka.value)
  console.log(date.value)
  console.log(startTime.value)
  console.log(endTime.value)
  console.log(doctor.value)
}

const updateAppointment = () => {
  const firstName = document.getElementById("update-appointment-first-name");
  const lastName = document.getElementById("update-appointment-last-name");
  const amka = document.getElementById("update-appointment-amka");
  const date = document.getElementById("update-appointment-form-appointment-date");
  const startTime = document.getElementById("update-appointment-appointment-start-time");
  const endTime = document.getElementById("update-appointment-appointment-end-time");
  const doctor = document.getElementById("update-appointment-appointment-doctor");

  console.log(firstName.value)
  console.log(lastName.value)
  console.log(amka.value)
  console.log(date.value)
  console.log(startTime.value)
  console.log(endTime.value)
  console.log(doctor.value)
}

const searchForVaccination = () => {
  const amka = document.getElementById("vaccination-amka");
  console.log(amka.value);

  const vaccinationResults = document.getElementById("vaccination-search-results");
  const status = document.getElementById("vaccination-status");
  const expiringDate = document.getElementById("vaccination-expiring-date");

  vaccinationResults.style.display = "block";
  status.innerHTML = "VACCINATED";
  expiringDate.innerHTML = "05-04-2023";
}

const submitVaccination = () => {
  const firstName = document.getElementById("vaccinated-citizen-first-name");
  const lastName = document.getElementById("vaccinated-citizen-last-name");
  const amka = document.getElementById("vaccinated-citizen-amka");
  const afm = document.getElementById("vaccinated-citizen-afm");
  const email = document.getElementById("vaccinated-citizen-email");

  console.log(firstName.value)
  console.log(lastName.value)
  console.log(amka.value)
  console.log(afm.value)
  console.log(email.value)
}

const submitAvailableTimeslots = () => {
  const doctor = document.getElementById("available-timeslots-doctor");
  const date = document.getElementById("available-timeslots-date");
  const startTime = document.getElementById("avaiable-timeslots-start-time");
  const endTime = document.getElementById("avaiable-timeslots-end-time");

  console.log(doctor.value)
  console.log(date.value)
  console.log(startTime.value)
  console.log(endTime.value)
}

const searchForDoctorAppointments = () => {
  const doctor = document.getElementById("appointment-doctor-assigned");
  const timePeriod = document.getElementById("appointment-date-options");

  console.log(doctor.value)
  console.log(timePeriod.value)

  const searchForm = document.getElementById("doctor-appointments-search");
  searchForm.style.display = "none";
  const appointmentsResults = document.getElementById("doctor-appoinments-results");
  appointmentsResults.style.display = "block";

  // /* Get table */
  // const appoinmentsTable = document.getElementById("appointments-table");
  // /* Get Row */
  // const row1 = appoinmentsTable.insertRow(1);
  // /* Get cells */
  // const cell1 = row1.insertCell(0);
  // const cell2 = row1.insertCell(1);
  // /* Insert Data to cells */
  // cell1.innerHTML = "Serafeim Dossas";
  // cell2.innerHTML = "20.05-20.10";

  // /* Get Row */
  // const row2 = appoinmentsTable.insertRow(2);
  // /* Get cells */
  // const cell3 = row2.insertCell(0);
  // const cell4 = row2.insertCell(1);
  // /* Insert Data to cells */
  // cell3.innerHTML = "John Doe";
  // cell4.innerHTML = "21.45-21.50";
}