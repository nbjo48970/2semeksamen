const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("heroSlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 5000);
// }