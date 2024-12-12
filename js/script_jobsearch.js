// Function to load the selected job board
function loadJobBoard() {
    // Get the selected job board from the dropdown
    const jobBoard = document.getElementById("jobBoardSelect").value;
    
    // Get the iframe, image, and link elements
    const jobBoardIframe = document.getElementById("jobBoardIframe");
    const jobBoardImage = document.getElementById("jobBoardImage");
    const jobBoardLink = document.getElementById("jobBoardLink");

    // Hide the iframe and image initially
    jobBoardIframe.style.display = "none";
    jobBoardImage.style.display = "none";
    jobBoardLink.style.display = "none"; // Hide the link initially

    // Set the iframe or image source based on the selected job board
    if (jobBoard === "ziprecruiter") {
        jobBoardImage.src = "images/ziprecruiter_jobs.jpg"; // ZipRecruiter preview image
        jobBoardLink.href = "https://www.ziprecruiter.com"; // ZipRecruiter link
        jobBoardLink.style.display = "block"; // Display the link around the image
        jobBoardImage.style.display = "block";
    } else if (jobBoard === "monster") {
        jobBoardImage.src = "images/monster_jobs.jpg"; // Monster preview image
        jobBoardLink.href = "https://www.monster.com"; // Monster link
        jobBoardLink.style.display = "block"; // Display the link around the image
        jobBoardImage.style.display = "block";
    } else if (jobBoard === "indeed") {
        jobBoardImage.src = "images/indeed_jobs.jpg"; // Indeed preview image
        jobBoardLink.href = "https://www.indeed.com"; // Indeed link
        jobBoardLink.style.display = "block"; // Display the link around the image
        jobBoardImage.style.display = "block";
    } else if (jobBoard === "linkedin") {
        jobBoardImage.src = "images/linkedin_jobs.jpg"; // LinkedIn preview image
        jobBoardLink.href = "https://www.linkedin.com/jobs"; // LinkedIn Jobs link
        jobBoardLink.style.display = "block"; // Display the link around the image
        jobBoardImage.style.display = "block";
    } else if (jobBoard === "handshake") {
        jobBoardImage.src = "images/handshake_jobs.jpg"; // Handshake preview image
        jobBoardLink.href = "https://lehmancuny.joinhandshake.com/login"; // Handshake link
        jobBoardLink.style.display = "block"; // Display the link around the image
        jobBoardImage.style.display = "block";
    } else {
        // Reset if no job board is selected
        jobBoardIframe.style.display = "none";
        jobBoardImage.style.display = "none";
        jobBoardLink.style.display = "none";
    }
}
