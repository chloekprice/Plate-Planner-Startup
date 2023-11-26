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
function getUserName() {
    return localStorage.getItem('user');
}
// async function createUser() {
//     const userName = this.getUserName();
//     const newUser = {userName: userName};

//     try {
//       const response = await fetch('/create_user', {
//         method: 'POST',
//         headers: {'content-type': 'application/json'},
//         body: JSON.stringify(newUser),
//       });
//       const created = await response.json();
//       console.log(created);
//     } catch {
//       // If there was an error then just track scores locally
//       console.log("could not save the user");
//     }
// } 
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
    // const modalEl = document.querySelector('#msgModal');
    // modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    // const msgModal = new bootstrap.Modal(modalEl, {});
    // msgModal.show();
  }
}
  