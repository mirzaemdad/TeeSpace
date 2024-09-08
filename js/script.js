
/* ============JS================ */
/* aos script */

AOS.init({
  duration: 1000,
  easing: 'linear',   
});





/* ============= jQ ================= */
$(function(){
        $("#count4").countMe(1);
        $("#count9").countMe(1);


        // slider
    $('.demo').slick({
        slidesToShow: 4,
        dots: true,
        speed: 300,



        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
    });

        // slider  What People Are Saying
    $('.p_slider').slick({
        slidesToShow: 3,
        dots: true,
        speed: 300,
        arrows: false,
        infinite: true,
        autoplay: true,



        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
    });
});






