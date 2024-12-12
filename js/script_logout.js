// Logout Confirmation
        function confirmLogout() {
            if (confirm('Are you sure you want to log out?')) {
                // Redirect to logout or perform logout actions here
                window.location.href = 'logout.html'; // Example logout redirection
            }
        }