// Get the modal element
const modal = document.getElementById('quick-view-modal');

// Get the "Quick View" button
const quickViewButtons = document.querySelectorAll('.card-img button');

// Get the close button
const closeModal = document.querySelector('.close');

// Add event listeners to all "Quick View" buttons
quickViewButtons.forEach((button) => {
    button.addEventListener('click', () => {
        modal.style.display = 'block'; // Show the modal
    });
});

// Add event listener to close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle thumbnail clicks to change the main image in the gallery
const thumbnails = document.querySelectorAll('.thumbnails img');
const galleryImg = document.querySelector('.gallery-img');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (e) => {
        galleryImg.src = e.target.src; // Update the main image with the clicked thumbnail
    });
});
