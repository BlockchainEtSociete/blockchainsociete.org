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
   

  // Compute the number of events
  let eventNumber = $('#events .swiper-wrapper').children().length;

  const isUpcomingDate = (date)=>{
    date = date.split('/').map(s=>parseInt(s))
    date = new Date(date[2],date[1]-1,date[0]);
    return date >= Date.now();
  }

  // Add upcoming on event div if not passed
  const handleUpcomingEvent = ()=>{
    let lastEvent = $('#events .swiper-wrapper .event').last()
    let date = lastEvent.find('.event-date-time .event-date')[0].innerHTML

    if( isUpcomingDate(date) ){
      lastEvent.addClass('upcoming');
    }
  };

  handleUpcomingEvent();

  let carouselInitialized = false;

  let swiper = new Swiper ('.swiper-container', {
    initialSlide: eventNumber-1,
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    on:{
      slideChange: updateButtons
    },
    keyboard:true,
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
        slidesPerView:3
      },
      1690:{
        slidesPerView:4
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
    if( carouselInitialized ){
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

  var offset = 250;
  var duration = 300;

  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('.gotop').fadeIn(duration);
    } else {
      $('.gotop').fadeOut(duration);
    }
  });

  $('.gotop').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  })

  let clipboard = new ClipboardJS('.donation-list img');

  clipboard.on('success',(e)=>{
    document.getElementsByClassName('alert')[0].innerHTML = `
      <i><strong>${e.text}</strong><i><br> 
      copié dans le presse-papier
    `;
    $(".alert").removeClass("in").show();
    $(".alert").delay(5000).addClass("in").fadeOut(2000);
  })

  clipboard.on('error',(e)=>{
    console.error(`can't copy to clipboard (${e})`);
  })


})(jQuery); // End of use strict
