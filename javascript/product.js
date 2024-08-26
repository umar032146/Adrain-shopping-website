const productSlides = document.querySelectorAll('.product-slide');
const productIndicators = document.querySelectorAll('.product-indicator');
let currentIndex = 0;
let autoplayInterval;

function changeSlide(index) {
    // Remove the current product-active class
    document.querySelector('.product-indicator.product-active').classList.remove('product-active');
    document.querySelector('.product-slide.product-active').classList.remove('product-active');
    
    // Add the product-active class to the new slide and indicator
    productSlides[index].classList.add('product-active');
    productIndicators[index].classList.add('product-active');

    // Slide the products
    const slideWidth = productSlides[0].clientWidth;
    document.querySelector('.product-slides').style.transform = `translateX(-${slideWidth * index}px)`;
    
    currentIndex = index;
}

function autoplay() {
    autoplayInterval = setInterval(() => {
        let nextIndex = (currentIndex + 1) % productSlides.length;
        changeSlide(nextIndex);
    }, 3000); // Slide every 3 seconds
}

productIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        changeSlide(index);
        clearInterval(autoplayInterval);
        autoplay(); // Restart autoplay after manual change
    });
});

productSlides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        changeSlide(index);
        clearInterval(autoplayInterval);
        autoplay(); // Restart autoplay after manual change
    });
});

autoplay(); // Start autoplay



document.querySelectorAll('.desc-heading').forEach((heading, index) => {
    heading.addEventListener('click', () => {
        // Remove active class from all slides and headings
        document.querySelectorAll('.desc-slide').forEach(slide => {
            slide.classList.remove('desc-active');
        });
        document.querySelectorAll('.desc-heading').forEach(heading => {
            heading.classList.remove('desc-active');
        });

        // Add active class to the clicked heading and corresponding slide
        document.querySelectorAll('.desc-slide')[index].classList.add('desc-active');
        heading.classList.add('desc-active');
    });
});

const stars = document.querySelectorAll('.sys-star');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add('sys-filled');
                s.innerHTML = '&#9733;';
            } else {
                s.classList.remove('sys-filled');
                s.innerHTML = '&#9734;';
            }
        });
    });
});



