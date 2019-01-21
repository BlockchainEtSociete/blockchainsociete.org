(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  $('[data-toggle="tooltip"]').tooltip();

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 57
  });

  // manage section link
  $(".section-title h2").on("click", function(event) {
    const section = event.target.closest("section");
    if (section !== undefined) {
      const id = $(section).attr("id");
      $("html, body").animate(
        { scrollTop: $("#" + id).offset().top },
        "fast",
        function() {
          window.location.hash = id;
        }
      );
    }
  });

  /*
  * CAROUSEL SECTION
  */
   
  let carouselInitialized = false;

  let swiper = new Swiper ('.swiper-container', {
    initialSlide: 10,
    slidesPerView: 6,
    spaceBetween: 30,
    centeredSlides: true,
    on:{
      slideChange: updateButtons
    },
    breakpoints:{
      576:{
        slidesPerView:1
      },
      768:{
        slidesPerView:2
      },
      992:{
        slidesPerView:3
      },
      1200:{
        slidesPerView:4
      },
      1690:{
        slidesPerView:5
      }
    }
  })

  carouselInitialized = true;


  let carouselNext = $('.carousel-navigation .carousel-next')
  let carouselPrev = $('.carousel-navigation .carousel-prev')
  
  carouselNext.click(function(){
    swiper.slideNext()
    updateButtons();
  })
  
  carouselPrev.click(function(){
    swiper.slidePrev()
    updateButtons();
  })

  function setButtonDisabled(button,disabled){
    button.toggleClass('disabled',disabled);
  }

  function updateButtons(){
    console.log("updateButtons")
    if( carouselInitialized ){
    console.log("carouselInitialized")

      setButtonDisabled(carouselPrev,swiper.isBeginning)
      setButtonDisabled(carouselNext,swiper.isEnd)
    }
  }

  updateButtons();

  /*
  * END CAROUSEL SECTION
  */
  

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal(
    ".sr-icons",
    {
      duration: 600,
      scale: 0.3,
      distance: "0px"
    },
    200
  );
  sr.reveal(".sr-button", {
    duration: 1000,
    delay: 200
  });
  sr.reveal(
    ".sr-contact",
    {
      duration: 600,
      scale: 0.3,
      distance: "0px"
    },
    300
  );
})(jQuery); // End of use strict
