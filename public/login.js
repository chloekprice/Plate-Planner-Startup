function login() {
    const btn = document.querySelector('.start');
    btn.addEventListener('click', () => {
        console.log('clicked');
        const userName = document.querySelector('#name');
        localStorage.setItem('user', userName.value)
        console.log(localStorage.getItem('user'));
        this.createUser();
        window.location.href = 'calendar.html';
    })
}

function getUserName() {
    return localStorage.getItem('user');
}

async function createUser() {
    const userName = this.getUserName();
    const newUser = {userName: userName};

    try {
      const response = await fetch('/create_user', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newUser),
      });
      const created = await response.json();
      console.log(created);
    } catch {
      // If there was an error then just track scores locally
      console.log("could not save the user");
    }
} 
  