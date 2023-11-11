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