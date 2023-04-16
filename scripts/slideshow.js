// get all the slides
const slides = document.querySelectorAll('.slideshow-slide');

let currentSlideIndex = 0;
let timer;

// show the first slide
showSlide(currentSlideIndex);

// start the slideshow timer
startTimer();

function showSlide(index) {
  // hide all the slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  // show the current slide
  slides[index].classList.add('active');
  currentSlideIndex = index;
}

function startTimer() {
  // set a timer to switch to the next slide every 30 seconds
  timer = setInterval(() => {
    // get the index of the next slide
    let nextSlideIndex = currentSlideIndex + 1;
    // if we've reached the end of the slides, start over at the beginning
    if (nextSlideIndex >= slides.length) {
      nextSlideIndex = 0;
    }
    // show the next slide
    showSlide(nextSlideIndex);
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

// stop the timer when the user interacts with the slideshow
document.querySelector('.slides-container').addEventListener('mouseenter', stopTimer);
document.querySelector('.slides-container').addEventListener('mouseleave', startTimer);
