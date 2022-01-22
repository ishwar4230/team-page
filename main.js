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