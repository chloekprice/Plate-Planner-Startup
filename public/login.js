function login() {
    const btn = document.querySelector('.start');
    btn.addEventListener('click', () => {
        console.log('clicked');
        const userName = document.querySelector('#name');
        localStorage.setItem('user', userName.value)
        console.log(localStorage.getItem('user'));
        window.location.href = 'calendar.html';
    })
}

async function loadList() {
    const response = await fetch("/api/list")
    const list = await response.json()
  
    // Modify the DOM to display the scores
  }
  