window.onload = function(){
  //vanilla JS

  //Parallax Block Contacts
	var wrapper = document.querySelector('.contacts'),
			layerOne = document.querySelector('.contacts__bg');

	wrapper.addEventListener('mousemove',function(e){
		var pageX = e.clientX,
				pageY = e.clientY;
		layerOne.style.webkitTransform = `translate(${pageX/500}%, ${pageY/500}%)`;
  });


  //jQuery + libs

  //Menu
  var btnTrigger = $('#mob');
  var hiddenMenu = $('#h-m');
  var hamburger = $('#hamburger');
  var close = $('#close');
  var hiddenMenuLinks = hiddenMenu.find('a');
  var headerMenu = $('.header');
  var navLinks = $('.nav a');
  var navLi = $('.nav li');

  btnTrigger.on('click', function(){
    hiddenMenu.toggleClass('hidden-menu_active');
    hamburger.toggleClass('mobile__item_hidden');
    close.toggleClass('mobile__item_hidden');
  })

  hiddenMenuLinks.each(function(index, item) {
    $(this).on('click', function() {
      hiddenMenu.toggleClass('hidden-menu_active');
    })
  })

  navLinks.each(function() {
    $(this).on('click', function() {
      navLi.removeClass('nav__item_active');
      $(this).parent().toggleClass('nav__item_active');
    })
  })


  //Adding BG to header when user scrolling wheel
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 200) {
	    headerMenu.addClass('header_bg')
	  }
	  else{
		  headerMenu.removeClass('header_bg')
	  }
  })


  //LAng
  var langItems = $('.lang__item');
  var langContainer = $('.lang li').first();

  langItems.each(function(index,item) {
    $(this).on('click', function() {
      if(index === 0) {
        return;
      }
      var curr = $(this).text();
      var prev = $(this).parent().parent().parent().find('li').first().text();
      langContainer.text(curr);
      $(this).text(prev);
    })
  })

  //Scroll to ID
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    var header = $('.header').height();
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - header
        }, 1000);
      }
    }
  });

  //Parallax Scroll
  var s = skrollr.init();

  //Owl Carousel
  var owl = $('.about-gallery');
  owl.owlCarousel({
    margin:0,
    loop:true,
    items:1,
    dots: true,
    dotData: true,
    dotsData: true
  });

  var owlDots = $('.about-gallery .owl-dots').find('.owl-dot');
  owlDots.each(function(index, elem) {
    $(this).html(`<span>0${index+1}</span>`)
  })

  var owl2 = $('.portfolio-gallery');
  owl2.owlCarousel({
    margin:0,
    loop:true,
    items:1,
    dots: true,
    dotsEach: true,
  });

  var owlDots2 = $('.portfolio-gallery .owl-dots').find('.owl-dot');
  owlDots2.each(function(index, elem) {
    $(this).html(`<span>0${index+1}</span>`)
  })

}