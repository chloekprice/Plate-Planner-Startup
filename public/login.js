// Set up
(async () => {
  const userName = localStorage.getItem('user');
  if (userName) {
    console.log("logged in!");
    let display_name = document.getElementById('playerName');
    if (display_name) {
      display_name.textContent = userName;
    }
    this.setDisplay('instructions', 'none');
    this.setDisplay('loginControls', 'none');
    this.setDisplay('preexistingControls', 'block');
  } else {
    console.log("NOT logged in!");
    this.setDisplay('instructions', 'block');
    this.setDisplay('loginControls', 'block');
    this.setDisplay('preexistingControls', 'none');
  }
})();
async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#name')?.value;
  const userEmail = document.querySelector('#email')?.value;
  const userPassword = document.querySelector('#password')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ userName: userName, email: userEmail, password: userPassword }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (response.ok) {
    localStorage.setItem('user', userName);
    window.location.href = 'calendar.html';
  } else {
    const body = await response.json();
    console.log("sorry, there has been an error");
    this.errMsg(`${body.mdg}: Issue with user`);
  }
}
function login() {
    const btn = document.querySelector('.old');
    btn.addEventListener('click', () => {
      console.log('clicked login');
      this.loginOrCreate(`/api/auth/login`);
  })
}
function createNewUser() {
  const btn = document.querySelector('.new');
  btn.addEventListener('click', () => {
    console.log('clicked create');
    this.loginOrCreate(`/api/auth/create`);
  })
}
// Helper functions
function getCurrUser() {
    return localStorage.getItem('user');
}
function setDisplay(controlId, display) {
  let controls = document.getElementById(controlId);
  controls.style.display = display;
}
function errMsg(error) {
  alert(error);
}
function clearLocalStorage() {
  localStorage.setItem('list', JSON.stringify([]));
  localStorage.setItem('user', '');
  this.clearCalendar();
}
function clearCalendar() {
  let mon_breakfast = "";
  let mon_lunch = "";
  let mon_dinner = "";
  let tues_breakfast = "";
  let tues_lunch = "";
  let tues_dinner = "";
  let wed_breakfast = "";
  let wed_lunch = "";
  let wed_dinner = "";
  let thurs_breakfast = "";
  let thurs_lunch = "";
  let thurs_dinner = "";
  let fri_breakfast = "";
  let fri_lunch = "";
  let fri_dinner = "";
  let sat_breakfast = "";
  let sat_lunch = "";
  let sat_dinner = "";
  let sun_breakfast = "";
  let sun_lunch = "";
  let sun_dinner = "";
  
  localStorage.setItem('meal1', mon_breakfast);
  localStorage.setItem('meal2', mon_lunch);
  localStorage.setItem('meal3', mon_dinner);
  localStorage.setItem('meal4', tues_breakfast);
  localStorage.setItem('meal5', tues_lunch);
  localStorage.setItem('meal6', tues_dinner);
  localStorage.setItem('meal7', wed_breakfast);
  localStorage.setItem('meal8', wed_lunch);
  localStorage.setItem('meal9', wed_dinner);
  localStorage.setItem('meal10', thurs_breakfast);
  localStorage.setItem('meal11', thurs_lunch);
  localStorage.setItem('meal12', thurs_dinner);
  localStorage.setItem('meal13', fri_breakfast);
  localStorage.setItem('meal14', fri_lunch);
  localStorage.setItem('meal15', fri_dinner);
  localStorage.setItem('meal16', sat_breakfast);
  localStorage.setItem('meal17', sat_lunch);
  localStorage.setItem('meal18', sat_dinner);
  localStorage.setItem('meal19', sun_breakfast);
  localStorage.setItem('meal20', sun_lunch);
  localStorage.setItem('meal21', sun_dinner);
}
// Buttons/Navigation
function plan() {
  window.location.href = 'calendar.html';
}
function logout() {
  localStorage.removeItem('user');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
  this.clearLocalStorage();
}
async function navigateToCalendar() {
  const response = await fetch('api/user/me', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (response.ok) {
    window.location.href = 'calendar.html';
  } else {
    console.log('sorry there has been an error');
    const body = await response.json();
    this.errMsg(`${body.msg}: Please login to continue`);
  }
}
async function navigateToList() {
  const response = await fetch('api/user/me', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (response.ok) {
    window.location.href = 'shopping_list.html';
  } else {
    console.log('sorry there has been an error');
    const body = await response.json();
    this.errMsg(`${body.msg}: Please login to continue`);
  }
}
function navigateToHome() {
  window.location.href = 'index.html';
}
  