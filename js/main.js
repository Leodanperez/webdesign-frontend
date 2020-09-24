$(document).ready(function() {
  $(window).scroll(function() {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  })

  //plugin magnific popup
  $('.works').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled:true,
      preload: [0,2]
    }
  });

});