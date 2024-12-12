// Function to display the greeting and menu after the user submits their name
function showGreeting() {
    // Get the user's name from the input field
    const username = document.getElementById("username").value.trim();
    
    // Check if the user entered a name
    if (username) {
        // Display the personalized greeting
        const greeting = document.getElementById("greeting");
        greeting.textContent = `${username}!`;
        
        // Show the menu section
        const menuSection = document.getElementById("menu-section");
        menuSection.classList.remove("hidden");
        
        // Hide the input section after submission
        const inputSection = document.getElementById("input-section");
        inputSection.style.display = "none";
        
        // Update the prompt text
        const prompt = document.getElementById("prompt");
        prompt.textContent = "Great to meet you.";
    } else {
        // Alert if no name is entered
        alert("Please enter your name.");
    }
}
