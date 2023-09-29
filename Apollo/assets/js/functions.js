$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');

	});
	
}

nav();
//----------------------navigation----------------------------------------
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (i) => {
      i.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      smoothScroll(targetId);
    });
  });

});

//-----------------------------MAP------------------------------------------

var map = L.map('map').setView([46.616667,-71.51666], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([46.616667,-71.51666]).addTo(map)
    .bindPopup('Bienvenue à la campagne')
    .openPopup();

//-------------------------------carousel----------------------------------
const banner = document.querySelector('.banner');
const slides = banner.querySelectorAll('li');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentimg = 0;

function nextSlide() {
  slides[currentimg].classList.remove('active');
  currentimg = (currentimg + 1) % slides.length;
  slides[currentimg].classList.add('active');
}

function prevSlide() {
  slides[currentimg].classList.remove('active');
  currentimg = (currentimg - 1 + slides.length) % slides.length;
  slides[currentimg].classList.add('active');
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
