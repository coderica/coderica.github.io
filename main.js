$(window).load(function() {

  var navTop = $('#nav_bar').offset().top;

  if ($('html').height() < $(window).height()) {
    $('footer').css({position: 'absolute'});
  }

  $(window).scroll(function () {
      if ($(window).scrollTop() > navTop) {
          $('#nav_bar').css({
              position: 'fixed',
              top: '0px',
              width: '100%'
          });
      } else {
          $('#nav_bar').removeAttr('style');
      }
  });

  // var imageHeight, wrapperHeight, overlap, container = $('.mask');
  // var image = container.find('img')  
   
  // function centerImage() {
  //     wrapperHeight = container.height();
  //     overlap = (wrapperHeight - image.height()) / 2;
  //     image.css('margin-top', overlap);
  // }
       
  // $(window).on("load resize", centerImage);
   
  // var el = document.getElementById('mask');
  // if (el.addEventListener) {  
  //     el.addEventListener("webkitTransitionEnd", centerImage, false); // Webkit event
  //     el.addEventListener("transitionend", centerImage, false); // FF event
  //     el.addEventListener("oTransitionEnd", centerImage, false); // Opera event
  // }


  // write function to open resumé in pdf
});


