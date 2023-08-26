$(function(){
    // var typed = new Typed(".typed", {
    //     strings: ["Shakhawat"],
    //     typeSpeed: 100,
    //     backSpeed: 100,
    //     backDelay: 3000,
    //     showCursor: false,
    //     loop:true
    //   });

      var typed = new Typed(".typed", {
        strings: ["Frontend Developer","Professional coder"],
        typeSpeed: 80,
        backSpeed: 30,
        showCursor: false,
        // fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 2000,
        loop:true
      });
      
     
    // lightbox.option({
    //   'resizeDuration': 200,
    //   'wrapAround': true
    // })

      jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },2000);
    });
});