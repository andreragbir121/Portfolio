var typed = new Typed(".text",{
    strings:[ "Information Technology Specialist", "Web developer" , "Game Developer"],
    typeSpeed:50,
    backSpeed:50,
    backDelay: 1000,
    loop:true
});

//toggle from navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');
}

//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll ('header nav a');

window.onscroll = () => {
    sections.forEach (sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector ('header nav a[href*=' + id +']').classList.add('active');
            });
            //active sections for animation on scroll
            sec.classList.add ('show-animate');
        }
        //if want to use animation that repeats on scroll
        else{
            sec.classList.remove ('show-animate');
        }
    })
    //sticky head
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100 );


    //remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.remove('active');
}



document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    const slideWidth = slider.querySelector(".slide").offsetWidth;
    let currentSlide = 0;
  
    // Move to the previous slide
    prevBtn.addEventListener("click", function() {
      if (currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
      }
    });
  
    // Move to the next slide
    nextBtn.addEventListener("click", function() {
      if (currentSlide < slider.children.length - 1) {
        currentSlide++;
        updateSliderPosition();
      }
    });
  
    function updateSliderPosition() {
      const offset = -currentSlide * slideWidth;
      slider.style.transform = `translateX(${offset}px)`;
    }
  });



















  