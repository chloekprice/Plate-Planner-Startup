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
    this.errMsg(body.msg);
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
  alert(`${error}: Please login to continue`);
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
    this.errMsg(body.msg);
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
    this.errMsg(body.msg);
  }
}
function navigateToHome() {
  window.location.href = 'index.html';
}
  