$(document).ready(function() {

  var stickyHeaderTop = $('#nav_bar').offset().top;

  $(window).scroll(function () {
      if ($(window).scrollTop() > stickyHeaderTop) {
          $('#nav_bar').css({
              position: 'fixed',
              top: '0px',
              width: '100%'
          });
          $('#unsticky').css('margin-top', $('#nav_bar').outerHeight(true) + parseInt($('#unstickyheader').css('marginBottom')));
      } else {
          $('#nav_bar').css({
              top: '0px',
              position: 'static',
              width:''
          });
          $('#unsticky').css('margin-top', '0px');
      }
  });

  var imageHeight, wrapperHeight, overlap, container = $('.mask');
  var image = container.find('img')  
   
  function centerImage() {
      wrapperHeight = container.height();
      overlap = (wrapperHeight - image.height()) / 2;
      image.css('margin-top', overlap);
  }
       
  $(window).on("load resize", centerImage);
   
  // var el = document.getElementById('mask');
  // if (el.addEventListener) {  
  //     el.addEventListener("webkitTransitionEnd", centerImage, false); // Webkit event
  //     el.addEventListener("transitionend", centerImage, false); // FF event
  //     el.addEventListener("oTransitionEnd", centerImage, false); // Opera event
  // }


  // write function to open resumé in pdf
});


