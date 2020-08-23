//  --------------------------
//        snow falling
// ----------------------------      
//  $("#snow").fallingSnow();
 //  --------------------------
//        snow falling
// ----------------------------  



// fixed/sticky menu

$(window).scroll(function(){
    var scrollamount = $(window).scrollTop()
    
    if(scrollamount > 0){
      $(".menu").addClass("fixed")
    }else{
      $(".menu").removeClass("fixed")
    }
  
      
  
  
  
    if(scrollamount > 500){
      $(".btop").fadeIn();
    }else{
      $(".btop").fadeOut();
    }
  })
  
  
  $(".btop").click(function(){
  $("html,body").animate({
    scrollTop:0
  },3000)
  });

 //  --------------------------
//        feedback part details
// ----------------------------  
$('.ditto').slick({
    dots: false,
    fade:true,
    asNavFor:".asia",
    autoplaySpeed: 2000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
   arrows:false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
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
 //  --------------------------
//        feedback part details
// ----------------------------  
 //  --------------------------
//        feedback part img
// ----------------------------  
$('.asia').slick({
    dots: true,
    centerMode:true,
    centerPadding:0,
    // autoplay:true,
    asNavFor: ".ditto",
    autoplaySpeed: 2000,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
   arrows:false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint:576,
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
 //  --------------------------
//        feedback part img
// ----------------------------  
 //  --------------------------
//        screenshort  part img
// ----------------------------  
$('.tula').slick({
    dots: true,
    centerMode:true,
    centerPadding:0,
    autoplay:true,
   
    autoplaySpeed: 1200,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
   arrows:false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
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
 //  --------------------------
//        screenshort  part img
// ----------------------------  