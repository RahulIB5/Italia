document.getElementById('switchToLogin').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.sign-up-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});

document.getElementById('switchToSignUp').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.sign-up-container').style.display = 'block';
});

// Form submission handling
document.getElementById('signUpForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    // Here you can add your logic to handle sign-up (e.g., send data to server)
    alert(`Sign Up Successful!\nName: ${name}\nEmail: ${email}`);

    // Clear the input fields after sign-up
    document.getElementById('signUpName').value = '';
    document.getElementById('signUpEmail').value = '';
    document.getElementById('signUpPassword').value = '';
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Here you can add your logic to handle login (e.g., send data to server)
    alert(`Login Successful!\nEmail: ${email}`);

    // Clear the input fields after login
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
});