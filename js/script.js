//  --------------------------
//        snow falling
// ----------------------------      
//  $("#snow").fallingSnow();
//  --------------------------
//        snow falling
// ----------------------------





// ---start preloader js---
setTimeout(function () {
  $("#preloader").fadeOut();
}, 1000);
//--- end preloader js---


// --venobox part start--

$('.venobox').venobox();

// <!-- wow script  -->

new WOW().init();


// -----start navbar collapse js-----

$("#my_nav ul li a").on("click", function () {
  $("#my_nav .navbar-collapse").collapse("hide");
});

// -----end navbar collapse js-----



// ---fixed/sticky menu---

$(window).scroll(function () {
  var scrollamount = $(window).scrollTop()

  if (scrollamount > 0) {
    $(".menu").addClass("fixed")
  } else {
    $(".menu").removeClass("fixed")
  }



  if (scrollamount > 500) {
    $(".btop").fadeIn();
  } else {
    $(".btop").fadeOut();
  }
})


$(".btop").click(function () {
  $("html,body").animate({
    scrollTop: 0
  }, 3000)
});


//---feedback part details---

$('.ditto').slick({
  dots: false,
  fade: true,
  asNavFor: ".asia",
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1 ,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// ---feedback part img---

$('.asia').slick({
  dots: true,
  centerMode: true,
  centerPadding: 0,
  // autoplay:true,
  asNavFor: ".ditto",
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//-- start counter--

$("#counter_part .counter").counterUp({
  delay: 10,
  time: 1000,
});

//-- end counter--





// // Add scrollspy to <body> start
$(document).ready(function () {
  $("body").scrollspy({
    target: "#my_nav",
    offset: 10
  });
});
// // Add scrollspy to <body> end

// Add smooth scrolling on all links inside the navbar start
$(document).ready(function () {
  $("#my_nav ul li a, #ani_button").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate({
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
// Add smooth scrolling on all links inside the navbar end

// start ani_button js
// // Add scrollspy to <body> start
$(document).ready(function () {
  $("body").scrollspy({
    target: "#banner-part",
    offset: 10
  });
});
// // Add scrollspy to <body> end
// end ani_button js