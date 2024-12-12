// Function to show PDF in popup
        function viewPDF(pdfUrl) {
            document.getElementById('pdfViewer').src = pdfUrl;
            document.getElementById('pdfPopup').style.display = 'flex';
        }

        // Function to close PDF popup
        function closePDF() {
            document.getElementById('pdfPopup').style.display = 'none';
            document.getElementById('pdfViewer').src = '';
        }