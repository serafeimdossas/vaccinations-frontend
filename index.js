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
  const day = new Date(date.value).getDate();
  const month = new Date(date.value).getMonth() + 1;
  const year = new Date(date.value).getFullYear();

  fetch(`http://localhost:8080/timeslots/${day}/${month}/${year}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      const timeslotsList = document.getElementById("timeslots-ul-list");
      timeslotsList.innerHTML = '';
      if (response.length === 0) {
        timeslotsList.innerHTML = '-';
      } else {
        response.map((timeslot) => {
          let newLi = document.createElement('li');
          let startTime = new Date(timeslot.start).getHours() + ":" + new Date(timeslot.start).getMinutes()
          let endime = new Date(timeslot.end).getHours() + ":" + new Date(timeslot.end).getMinutes()
          let doctorName = timeslot.doctor.name + " " + timeslot.doctor.surname + ", Doctor AMKA: " + timeslot.doctor.amka;
          let text = startTime + "-" + endime + ", Doctor: " + doctorName
          newLi.appendChild(document.createTextNode(text))
          timeslotsList.appendChild(newLi)
        })
      }
    });

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

  const timeslot = new Date(date.value + "T" + startTime.value + ":00.000+02:00").getTime();

  const appointmentBody = {
    doctor: parseInt(doctor.value),
    citizen: parseInt(amka.value),
    timeslot: timeslot,
    firstName: firstName.value,
    lastName: lastName.value
  }

  fetch(`http://localhost:8080/appointment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(appointmentBody)
  })
    .then((response) => {
      if (response.status !== 404) {
        return response.json()
      } else {
        return null;
      }
    })
    .then((response) => {
      if (response === null) {
        alert('Wrong timeslot data! Check available timeslots again!')
      }
      goToCitizenPage();
    });
}

const updateAppointment = () => {
  const firstName = document.getElementById("update-appointment-first-name");
  const lastName = document.getElementById("update-appointment-last-name");
  const amka = document.getElementById("update-appointment-amka");
  const date = document.getElementById("update-appointment-form-appointment-date");
  const startTime = document.getElementById("update-appointment-appointment-start-time");
  const endTime = document.getElementById("update-appointment-appointment-end-time");
  const doctor = document.getElementById("update-appointment-appointment-doctor");

  const timeslot = new Date(date.value + "T" + startTime.value + ":00.000+02:00").getTime();

  const appointmentBody = {
    doctor: parseInt(doctor.value),
    citizen: parseInt(amka.value),
    timeslot: timeslot,
    firstName: firstName.value,
    lastName: lastName.value
  }

  fetch(`http://localhost:8080/appointment/${parseInt(amka.value)}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(appointmentBody)
  })
    .then((response) => {
      if (response.status !== 404) {
        return response.json()
      } else {
        return null;
      }
    })
    .then((response) => {
      if (response === null) {
        alert('Wrong timeslot data or non-existing previous appointment for Citizen. Try again!')
      }
      goToCitizenPage();
    });
}

const searchForVaccination = () => {
  const amka = document.getElementById("vaccination-amka");
  const vaccinationResults = document.getElementById("vaccination-search-results");
  const status = document.getElementById("vaccination-status");
  const expiringDate = document.getElementById("vaccination-expiring-date");

  fetch(`http://localhost:8080/vaccination/${amka.value}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      if (response === null) {
        vaccinationResults.style.display = "block";
        status.innerHTML = "NOT VACCINATED";
        expiringDate.innerHTML = "-";
      } else {
        const expiryDay = new Date(response.expiryDate).getDate();
        const expiryMonth = new Date(response.expiryDate).getMonth() + 1;
        const expiryYear = new Date(response.expiryDate).getFullYear();
        vaccinationResults.style.display = "block";
        status.innerHTML = "VACCINATED";
        expiringDate.innerHTML = expiryDay + "-" + expiryMonth + "-" + expiryYear;
      }
    });
}

const submitVaccination = () => {
  const firstName = document.getElementById("vaccinated-citizen-first-name");
  const lastName = document.getElementById("vaccinated-citizen-last-name");
  const amka = document.getElementById("vaccinated-citizen-amka");
  const afm = document.getElementById("vaccinated-citizen-afm");
  const email = document.getElementById("vaccinated-citizen-email");
  const doctorFirstName = document.getElementById("vaccinated-citizen-doctor-first-name");
  const doctorLastName = document.getElementById("vaccinated-citizen-doctor-last-name");
  const doctorAmka = document.getElementById("vaccinated-citizen-doctor-amka");

  /* Date values */
  const vaccinationDate = new Date().getTime();
  const sixMonthsFromNowMilliseconds = 1000 * 60 * 60 * 24 * 180;
  const expiryDate = new Date().getTime() + sixMonthsFromNowMilliseconds;

  const vaccinationBody = {
    doctor: parseInt(doctorAmka.value),
    doctorFirstName: doctorFirstName.value,
    doctorLastName: doctorLastName.value,
    vaccinationDate: vaccinationDate,
    expiryDate: expiryDate,
    citizenAmka: parseInt(amka.value),
    citizenName: firstName.value,
    citizenSurname: lastName.value,
    citizenAfm: parseInt(afm.value),
    citizenEmail: email.value
  }

  fetch(`http://localhost:8080/vaccination`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(vaccinationBody)
  })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(response)
      goToDoctorPage()
    });
}

const submitAvailableTimeslots = () => {
  const doctorName = document.getElementById("available-timeslots-doctor-first-name");
  const doctorSurname = document.getElementById("available-timeslots-doctor-last-name");
  const doctor = document.getElementById("available-timeslots-doctor");
  const date = document.getElementById("available-timeslots-date");
  const startTime = document.getElementById("avaiable-timeslots-start-time");
  const endTime = document.getElementById("avaiable-timeslots-end-time");

  const doctorAmka = doctor.value;
  const timeslotStart = date.value + "T" + startTime.value + ":00.000+02:00"
  const timeslotEnd = date.value + "T" + endTime.value + ":00.000+02:00"

  const timeslotBody = {
    doctorAmka: parseInt(doctorAmka),
    doctorFirstName: doctorName.value,
    doctorLastName: doctorSurname.value,
    start: new Date(timeslotStart).getTime(),
    end: new Date(timeslotEnd).getTime()
  };

  fetch(`http://localhost:8080/timeslots`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(timeslotBody)
  })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(response)
      goToDoctorPage();
    });
}

const searchForDoctorAppointments = () => {
  const doctor = document.getElementById("appointment-doctor-assigned");
  const timePeriod = document.getElementById("appointment-date-options");
  const tableBody = document.getElementById("appointments-table").getElementsByTagName('tbody')[0];
  const searchForm = document.getElementById("doctor-appointments-search");
  const appointmentsResults = document.getElementById("doctor-appoinments-results");

  const appoinmentPeriod = timePeriod.value === "today" ? "today" : "all";
  const doctorAmka = doctor.value;

  fetch(`http://localhost:8080/appointments/${appoinmentPeriod}/${doctorAmka}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      if (response.length === 0) {
        searchForm.style.display = "none";
        appointmentsResults.style.display = "block";
        $(document).ready(function () {
          $('#appointments-table').DataTable({
            ordering: false,
            lengthMenu: [5, 10, 15, 20]
          });
        });
      } else {
        searchForm.style.display = "none";
        appointmentsResults.style.display = "block";
        response.forEach((appointment, index) => {
          /* Create new row */
          let row = tableBody.insertRow();
          /* Create cells */
          let cell0 = row.insertCell();
          let cell1 = row.insertCell();
          let cell2 = row.insertCell();
          /* Add text to cells */
          let citizen = appointment.appointmentCitizen.name + " " + appointment.appointmentCitizen.surname;
          cell0.innerHTML = citizen;
          let timeslotStartDate = new Date(appointment.appointmentTimeslot.start).getDate();
          let timeslotStartMonth = new Date(appointment.appointmentTimeslot.start).getMonth() + 1;
          let timeslotStartYear = new Date(appointment.appointmentTimeslot.start).getFullYear();
          let timeslotStartHour = new Date(appointment.appointmentTimeslot.start).getHours();
          let timeslotStartMinutes = new Date(appointment.appointmentTimeslot.start).getMinutes();
          let timeslotEndHour = new Date(appointment.appointmentTimeslot.end).getHours();
          let timeslotEndMinutes = new Date(appointment.appointmentTimeslot.end).getMinutes();
          let timeslot = `${timeslotStartHour}:${timeslotStartMinutes} - ${timeslotEndHour}:${timeslotEndMinutes} (${timeslotStartDate}/${timeslotStartMonth}/${timeslotStartYear}) `
          cell1.innerHTML = timeslot;
          let doctor = appointment.appointmentDoctor.name + " " + appointment.appointmentDoctor.surname;
          cell2.innerHTML = doctor;

          if (index === response.length - 1) {
            $(document).ready(function () {
              $('#appointments-table').DataTable({
                ordering: false,
                lengthMenu: [5, 10, 15, 20]
              });
            });
          }
        })
      }
    });
}