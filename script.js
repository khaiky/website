// Login form submission handler
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // TO DO: Implement authentication logic here
    // For demonstration purposes, we'll assume a successful login
    if (username === 'admin' && password === 'password') {
        // Redirect to homepage
        window.location.href = 'Homepage.html';
    } else {
        alert('Invalid username or password');
    }

});
