
// var button = document.getElementById("myButton")
// var pic = document.getElementById("myIcon")
// var pad = document.getElementById("myPadding")
// var bigT = document.getElementsByClassName("page-scroll bigTarget")


// console.log(bigT.length)
// for(i=0; i < bigT.length; i++){
//     bigT[i].addEventListener("click", bigTFunction)
//     function bigTFunction(){
//         if(pic.style.width === "65px"){
//             pic.setAttribute("style", "width:55px; height:55px;")
//             pad.setAttribute("style", "margin-bottom : 8px")
//         }else{
//             pic.setAttribute("style", "width:65px; height:65px")
//             pad.setAttribute("style", "margin-bottom : 0px")
//         }

//         if(window.scrollY > 0){
//             if (pic.style.width === "65px"){
//                 pad.setAttribute("style", "margin-bottom : 0px")
//             }else{
//                 pad.setAttribute("style", "margin-bottom : 1px")
//             }   
//         }
//     }
// }




// button.addEventListener("click", function(){ 
//     if(pic.style.width === "65px"){
//         pic.setAttribute("style", "width:55px; height:55px;")
//         pad.setAttribute("style", "margin-bottom : 8px")
//     }else{
//         pic.setAttribute("style", "width:65px; height:65px")
//         pad.setAttribute("style", "margin-bottom : 0px")
//     }

//     if(window.scrollY > 0){
//         if (pic.style.width === "65px"){
//             pad.setAttribute("style", "margin-bottom : 0px")
//         }else{
//             pad.setAttribute("style", "margin-bottom : 1px")
//         }   
//     }
// })

function main() {

(function () {
   'use strict';

   
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
    $(".navbar-nav li a").click(function (event) {
        // check if window is small enough so dropdown is created
        var toggle = $(".navbar-toggle").is(":visible");
        if (toggle) {
        $(".navbar-collapse").collapse('hide');
        }
    });

    $(document).mousedown(function (event){
        var toggle = $(".navbar-collapse").is(":visible");
        if (toggle) {
          $(".navbar-collapse").collapse('hide'); 
        }
    })
	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '.all',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
    
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });

}());


}
main();