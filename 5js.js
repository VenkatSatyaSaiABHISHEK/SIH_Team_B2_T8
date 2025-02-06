
function showSignup() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('signupPage').style.display = 'block';
}

function showLogin() {
    document.getElementById('signupPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
}


function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(email);
}


function validatePassword(password) {
    const passwordRegex = /^[a-zA-Z0-9]+$/;
    return passwordRegex.test(password);
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const loginError = document.getElementById('loginError');

    if (!validateEmail(email)) {
        loginError.textContent = 'Wrong email or password.';
    } else if (!validatePassword(password)) {
        loginError.textContent = 'Password must contain only letters and numbers.';
    } else {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.email === email && user.password === password);

        if (userExists) {
            loginError.textContent = '';
            window.location.href = 'HOME.html'; // add doctor home webset kkkeeee
        } else {
            loginError.textContent = 'Incorrect email or password.';
        }
    }
});


document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (!validateEmail(email)) {
        errorMessage.textContent = 'wrong email format. Please use a email account.';
    } else if (!validatePassword(password)) {
        errorMessage.textContent = 'Password must contain only letters and numbers.';
    } else if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
    } else {
       
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.email === email);

        if (userExists) {
            errorMessage.textContent = 'This email is already registered.'; // hede mana webset de store limmite //
        } else if (users.length >= 10) {
            errorMessage.textContent = 'Maximum number of registered users reached.';
        } else {
            
            users.push({ email: email, password: password });
            
            localStorage.setItem('users', JSON.stringify(users));

            errorMessage.textContent = '';
            alert('Signup successful!');
            showLogin(); 
        }
    }
});

// stored data ke use chadam ede inspection lo consloe store haye 
const users = JSON.parse(localStorage.getItem('users')) || [];
console.log('Stored Users:', users);
