let users = [];
let isReturningUser = false; // Change to true if you want to simulate a returning user

/*
// Simulate welcome message based on first-time or returning user
function displayWelcomeMessage() {
    const welcomeMessage = document.getElementById("welcome-message");
    if (isReturningUser) {
        welcomeMessage.textContent = "Welcome Back!";
    } else {
        welcomeMessage.textContent = "Welcome to Career Development App!";
    }
}

*/

// Handle login functionality
function login() {
    const identifier = document.getElementById("login-identifier").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(u => (u.username === identifier || u.email === identifier) && u.password === password);
    if (user) {
        alert("Welcome, " + user.username);
        // Proceed to user dashboard
    } else {
        alert("Invalid credentials.");
    }
}

// Handle signup functionality
function signup() {
    const username = document.getElementById("signup-username").value;
    const firstName = document.getElementById("signup-first-name").value;
    const lastName = document.getElementById("signup-last-name").value;
    const email = document.getElementById("signup-email").value;
    const major = document.getElementById("signup-major").value;
    const level = document.getElementById("signup-level").value;
    const securityQuestion = document.getElementById("signup-security-question").value;
    const securityAnswer = document.getElementById("signup-security-answer").value;

    if (username && firstName && lastName && email && major && level && securityQuestion && securityAnswer) {
        const newUser = {
            username, firstName, lastName, email, major, level,
            securityQuestion, securityAnswer, password: null
        };
        users.push(newUser);
        alert("Account created successfully!");
        showLogin();
    } else {
        alert("Please fill in all fields.");
    }
}

// Handle password reset functionality
function resetPassword() {
    const email = document.getElementById("reset-email").value;
    const securityAnswer = document.getElementById("reset-security-answer").value;
    const newPassword = document.getElementById("reset-new-password").value;

    const user = users.find(u => u.email === email && u.securityAnswer === securityAnswer);
    if (user) {
        user.password = newPassword;
        alert("Password reset successfully!");
        showLogin();
    } else {
        alert("Security question answer is incorrect.");
    }
}

// Show login form
function showLogin() {
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("reset-password-page").style.display = "none";
    document.getElementById("login-page").style.display = "block";
    displayWelcomeMessage();
}

// Show signup form
function showSignup() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("reset-password-page").style.display = "none";
    document.getElementById("signup-page").style.display = "block";
}

// Show reset password form
function showForgotPassword() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("reset-password-page").style.display = "block";
}

// Initial page setup
showLogin();
