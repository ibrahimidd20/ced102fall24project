document.getElementById('scan-button').addEventListener('click', () => {
    const fileInput = document.getElementById('resume-input');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');

    if (!fileInput.files[0]) {
        alert('Please upload a resume file.');
        return;
    }

    // Dummy scanner logic (you can improve with actual ATS rules)
    const fileName = fileInput.files[0].name;
    const isATSReady = fileName.toLowerCase().endsWith('.txt'); // Example condition

    if (isATSReady) {
        popupMessage.textContent = 'Your resume is ATS READY!';
        popup.classList.remove('hidden');
    } else {
        popupMessage.textContent = 'Your resume is NOT ATS READY. Try using simpler formatting and avoid images.';
        popup.classList.remove('hidden');
    }
});

// Close popup functionality
document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
});


document.addEventListener("DOMContentLoaded", () => {
    const resumeUpload = document.getElementById("resumeUpload");
    const resumePreview = document.getElementById("resumePreview");
    const resumePreviewContainer = document.getElementById("resumePreviewContainer");
    const scanResumeBtn = document.getElementById("scanResumeBtn");

    resumeUpload.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);

            // Display the file preview
            resumePreview.src = fileURL;
            resumePreviewContainer.style.display = "block";
            scanResumeBtn.disabled = false;

            // Add functionality for scanning (mock implementation)
            scanResumeBtn.addEventListener("click", () => {
                alert("Scanning resume for ATS compatibility...");
                // Replace this alert with actual ATS scanning logic.
            });
        } else {
            resumePreviewContainer.style.display = "none";
            scanResumeBtn.disabled = true;
        }
    });
});
