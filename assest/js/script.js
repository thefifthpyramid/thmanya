
//Search Input
$('.search').click(function () { 
    $('.input-box').addClass('open');
});
    

// ---- ---- Close Input ---- ---- //
$('.close-icon').click(function () { 
    $('.input-box').removeClass('open');
});

// End Search Animation Input 

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// prodcast-sec
var swiper = new Swiper(".prodcast-sec", {
  slidesPerView: 3,
  spaceBetween: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// Latest Posts
/**

    This fiddle is using the latest version 
    of Slick (from master) and jQuery.

**/


$(".slider").slick({
  asNavFor: '.nav',
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true
});

$(".nav").slick({
  asNavFor: '.slider',
  slidesToShow: 5,
  slidesToScroll: 1,
  draggable:true,
  infinite: true,
  swipeToSlide: true,
  vertical: true,
  verticalSwiping: true,
  centerMode: false
});

// replace getSlideCount and getNavigableIndexes without rehosting hack

$(".nav, .slider").each(function() {
  this.slick.getSlideCount = function() {

      var _ = this,
          slidesTraversed, swipedSlide, centerOffset;
          

      centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

    if (_.options.swipeToSlide === true) {
          
          _.$slideTrack.find('.slick-slide').each(function(index, slide) {
              var offsetPoint = slide.offsetLeft,
                  outerSize = $(slide).outerWidth();
              
              if(_.options.vertical === true) {
                  offsetPoint = slide.offsetTop;
                  outerSize = $(slide).outerHeight();
              }
              if (offsetPoint - centerOffset + (outerSize / 2) > (_.swipeLeft * -1)) {
                  swipedSlide = slide;
                  return false;
              }
          });
          slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
          
          return slidesTraversed;
      } else {
          return _.options.slidesToScroll;
      }

  };
  
  this.slick.getNavigableIndexes = function() {

      var _ = this,
          breakPoint = 0,
          counter = 0,
          indexes = [],
          max;

      if (_.options.infinite === false) {
          max = _.slideCount;
      } else {
          breakPoint = _.options.slideCount * -1;
          counter = _.options.slideCount * -1;
          max = _.slideCount * 2;
      }

      while (breakPoint < max) {
          indexes.push(breakPoint);
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }

      return indexes;

  };
});

//
$('button.slick-prev').html('<i class="fa fa-angle-up" aria-hidden="true"></i>');
$('button.slick-next').html('<i class="fa fa-angle-down" aria-hidden="true"></i>');