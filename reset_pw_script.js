// Sample user data (replace with actual database or storage)
    const users = [
        {
            username: "johnDoe",
            email: "john@example.com",
            securityQuestion: "What is your mother's maiden name?",
            securityAnswer: "Smith",
            password: "1234" // this would be hashed in a real app
        }
    ];

    function verifyEmailOrUsername() {
        const input = document.getElementById('email-username').value;
        let user = users.find(u => u.email === input || u.username === input);

        if (user) {
            // Display the security question
            document.getElementById('forgot-password-form').style.display = 'none';
            document.getElementById('security-question-form').style.display = 'block';
            document.getElementById('security-question').textContent = user.securityQuestion;
        } else {
            alert("No account found with that email/username.");
        }
    }

    function verifySecurityAnswer() {
        const answer = document.getElementById('security-answer').value;
        const user = users.find(u => u.email === document.getElementById('email-username').value || u.username === document.getElementById('email-username').value);

        if (user && answer === user.securityAnswer) {
            // Show the password reset form
            document.getElementById('security-question-form').style.display = 'none';
            document.getElementById('reset-password-form').style.display = 'block';
        } else {
            alert("Incorrect answer. Please try again.");
        }
    }

    function resetPassword() {
        const newPassword = document.getElementById('new-password').value;
        const user = users.find(u => u.email === document.getElementById('email-username').value || u.username === document.getElementById('email-username').value);

        if (user && newPassword) {
            // Update password in the system
            user.password = newPassword;
            alert("Your password has been successfully reset!");
        } else {
            alert("Please enter a valid password.");
        }
    }