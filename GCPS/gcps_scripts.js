//carousel javascript 
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.carousel-wrapper')) {
        const carouselWrapper = document.querySelector('.carousel-wrapper');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');

        let currentIndex = 0;

        function showSlide(index) {
            const itemWidth = document.querySelector('.carousel-item').offsetWidth;
            const newPosition = -index * itemWidth;
            carouselWrapper.style.transform = 'translateX(' + newPosition + 'px)';
        }

        function prevSlide() {
            currentIndex = (currentIndex - 4 + carouselWrapper.children.length) % carouselWrapper.children.length;
            showSlide(currentIndex);
        }

        function nextSlide() {
            currentIndex = (currentIndex + 4) % carouselWrapper.children.length;
            showSlide(currentIndex);
        }

        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
    }
});

//banner image cycle 
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.gcps-hero-banner-challanges')) {
        var images = ['image-1', 'image-2', 'image-3', 'image-4'];
        var currentIndex = 0;
        var banner = document.querySelector('.gcps-hero-banner-challanges');

        function changeBackground() {
            currentIndex = (currentIndex + 1) % images.length;
            banner.className = 'gcps-hero-banner-challenges ' + images[currentIndex];
        }

        setInterval(changeBackground, 3000);
    }
});

//home page cards 
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('homepage')) {
        var getHelpCards = document.querySelectorAll('.gcps-need-help-card');

        getHelpCards.forEach(function (card) {
            card.addEventListener('click', function () {
                window.location.href = '/services.html';
            });
        });
    }
})

//our work cards
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('our_work')) {
        var getHelpCards = document.querySelectorAll('.gcps-call-out-card');

        getHelpCards.forEach(function (card) {
            card.addEventListener('click', function () {
                window.location.href = this.querySelector('a').getAttribute('href');
            });
        });
    }
});