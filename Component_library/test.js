let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const timePerImage = 5000; // 5 seconds

function showNextImage() {
  // Hide the current image
  images[currentImageIndex].classList.remove('active');

  // Move to the next image
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  // Show the next image
  images[currentImageIndex].classList.add('active');
}

// Show the first image initially
images[currentImageIndex].classList.add('active');

// Set up a timer to show the next image
setInterval(showNextImage, timePerImage);