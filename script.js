// Select all images in the gallery and the modal elements
const galleryItems = document.querySelectorAll('.gallery-item');
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

// Add click event listener to each image
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('src');
        lightboxImg.src = imgSrc;  // Set the large image src
        lightboxModal.style.display = 'flex';  // Show the modal
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
    lightboxModal.style.display = 'none';
});

// Close the lightbox if the user clicks outside the image
lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
        lightboxModal.style.display = 'none';
    }
});
