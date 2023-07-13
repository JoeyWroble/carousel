document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const carouselSlides = document.querySelector('.carousel-slides');
    const slides = document.querySelectorAll('.slide');

    showMoreBtn.addEventListener('click', function() {
      carouselSlides.classList.add('show-all');
      showMoreBtn.style.display = 'none';

      for (let i = 4; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
    });
  });

