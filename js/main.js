$(".count").counterUp({
  delay: 10,
  time: 1000,
});

// footer to top button
mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 3,

    margin: 15,
    
    autoplay: true,
 
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
       
      },
      600: {
        items: 3,
        
      },
      1000: {
        items: 4,
      
        
      },
    },
  });
});