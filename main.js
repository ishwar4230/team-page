jQuery(document).ready(function($) {
    "use strict";
    
    $('.customers-testimonials').owlCarousel({
        loop:true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1
          },
          
          900: {
            items: 3
          }
        }
    });
});

const hamburger=document.querySelector(".hamburger");
const navLinks=document.querySelector(".navlinks");
const links=document.querySelectorAll(".navlinks li");

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle("open");
    links.forEach(link=>{
        link.classList.toggle("fade");
    });

    hamburger.classList.toggle("toggle");
});