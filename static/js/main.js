document.addEventListener("DOMContentLoaded", function() {

    // ********** Navigation within index.html *********
    document.querySelector('#GoToAboutUs').addEventListener('click', function() {
        document.querySelector('#AboutUs').scrollIntoView({behavior: 'smooth'});
    });
    
    document.querySelector('#GoToStories').addEventListener('click', function() {
        document.querySelector('#Stories').scrollIntoView({behavior: 'smooth'});
    });

    // ********** Swipe Section for Stories *********
    var leftArrow = document.getElementById('left-arrow');
    var rightArrow = document.getElementById('right-arrow');
    var slidesWrapper = document.querySelector('.slider-wrapper'); // Updated selector
    var slidesSection = slidesWrapper.querySelector('.slider-section'); // Updated selector
    var slides = Array.from(slidesSection.querySelectorAll('.slide')); // Updated selector
    var currentIndex = 0;

    function navigateSlides(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = slides.length - 1; // Loop back to the last slide
        if (currentIndex >= slides.length) currentIndex = 0; // Loop back to the first slide

        // Remove 'active' class from all slides
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });

        // Add 'active' class to the new current slide
        slides[currentIndex].classList.add('active');

        // Calculate the transform value based on the current slide
        var translateValue = -currentIndex * 100; // Assuming each slide is 100% wide
        slidesSection.style.transform = `translateX(${translateValue}%)`;
    }

    // Attach event listeners to the arrows
    leftArrow.addEventListener('click', function() {
        navigateSlides(-1); // Go to the previous slide
    });

    rightArrow.addEventListener('click', function() {
        navigateSlides(1); // Go to the next slide
    });

    // Initially activate the first slide
    slides[0].classList.add('active');

    
    // ********** See More button for showing experiences **********
    function toggleItems() {
        var items = document.querySelectorAll('.item');
        var button = document.getElementById('button-25');
    
        // Check the current text of the button
        if (button.textContent === 'See Less') {
            // Hide the items
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            // Change the button text to "See More"
            button.textContent = 'See More';

            button.scrollIntoView({ behavior: 'smooth', block: 'end'});
        } else {
            // Show the items
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'inline';
            }
            // Change the button text to "See Less"
            button.textContent = 'See Less';
        }
    }

    document.getElementById('button-25').addEventListener('click', toggleItems);
    
});

