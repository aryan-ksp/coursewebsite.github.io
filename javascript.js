// Function to toggle the "Mark as Completed" checkbox and update progress
function toggleCompletion(checkbox) {
    const videoList = document.querySelectorAll('.video-list input[type="checkbox"]');
    let completedVideos = 0;

    videoList.forEach(function(checkbox) {
        if (checkbox.checked) {
            completedVideos++;
        }
    });

    const totalVideos = videoList.length;
    const progress = (completedVideos / totalVideos) * 100;

    document.querySelector('.progress .progress-bar').style.width = progress + '%';
    document.querySelector('.progress p').innerText = 'Progress: ' + Math.round(progress) + '%';
}

// Save notes functionality
function saveNotes() {
    const notes = document.querySelector('.notes-tools textarea').value;
    if (notes) {
        alert("Your notes have been saved!");
    } else {
        alert("Please write some notes first.");
    }
}

// Submit course rating functionality
function submitRating() {
    const rating = document.querySelector('#rating').value;
    if (rating >= 1 && rating <= 5) {
        alert("Thank you for your rating of " + rating + " out of 5!");
    } else {
        alert("Please enter a valid rating (1-5).");
    }
}

// Download certificate functionality
function downloadCertificate() {
    alert("Certificate downloaded successfully!");
}
