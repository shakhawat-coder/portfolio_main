$(function(){
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

});

// =================back to top button=============
let toTop = document.querySelector(".back_to_top");
window.addEventListener("scroll", () => {
  if (window.scrollY>10){
    toTop.classList.add("show");
  }else{
    toTop.classList.remove("show");
  }
  
})