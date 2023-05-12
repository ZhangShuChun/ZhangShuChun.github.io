var swiper = new Swiper('.blog-slider', {
	passiveListeners:true,
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
    autoplay: {
    disableOnInteraction: true,
	delay:3000
    },
	    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper
	mousewheel:false,
	// autoHeight: true,
	pagination: {
		el: '.blog-slider__pagination',
		clickable: true,
	}
});

if(document.getElementById('swiper_container')){
   var comtainer = document.getElementById('swiper_container');
      comtainer.onmouseenter = function () {
        swiper.autoplay.stop();
      };
      comtainer.onmouseleave = function () {
        swiper.autoplay.start();
      }

   }
  

