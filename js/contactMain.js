$(window).scroll(function() {
    if ($(this).scrollTop() > 130) {
        $('#allNav').addClass('navFixed');
        $('#fluidNav').css({
            'background': '#18AFD3',
            'border-radius': '10px'
        });
    } else {
        $('#allNav').removeClass('navFixed')
    }
})
$(".navBar ul li").hover( function () {
	     $('.pageMain').removeClass('activeNav')
        $('.pageDown').hide()
        })
	$('.pageMain').hover(function(){
		$(this).addClass('activeNav')
  		$('.pageDown').show()
 	});
	$('.pageDown').on({
  		mouseleave:function(){
  		$(this).hide()
  		$('.pageMain').removeClass('activeNav')
  }
})
	$('.pageDown ul li a').on({
	  mouseover:function(){
	     pageIndex=$('.pageDown ul li a').index($(this));
  		$(this).css({'left':'10px',
  		'transition':'all .1s ease-in-out'})
  		$('.dropIcon:eq('+pageIndex+')').show();

  }, 
  mouseout:function(){
     $(this).css('left',0); 
        $('.dropIcon:eq('+pageIndex+')').hide();
       }
      
    })
$(function(){
  $(".allDrop ul li").hover(function() {
    $('.pageDown').hide()
});
$('.pageMain').hover(function() {
    $('.pageDown').show()
});
$('.pageDown').on({
    mouseleave: function() {
        $(this).hide()
    }
})
$('.pageDown ul li a').on({
    mouseover: function() {
        pageIndex = $('.pageDown ul li a').index($(this));
        $(this).css({
            'left': '10px',
            'transition': 'all .1s ease-in-out'
        })
        $('.dropIcon:eq(' + pageIndex + ')').show();

    },
    mouseout: function() {
        $(this).css('left', 0);
        $('.dropIcon:eq(' + pageIndex + ')').hide();
    }

});
$('.drop-down li a').on({
    mouseover: function() {
        dropIndex = $('.drop-down li a').index($(this));
        $(this).css({
            "left": "5px",
            'transition': 'all .1s ease-in-out',
            'color': '#F57E57'
        })
        $('.iconFa:eq(' + dropIndex + ')').show();
    },
    mouseleave: function() {
        $(this).css({
            'left': 0,
            'color': '#18AFD3'
        })
        $('.iconFa:eq(' + dropIndex + ')').hide();

    }
});
});
$(function(){
  $('.rd-navBar').click(function(){
    $('.navInput').fadeIn(250);
        $('.removeSearch').show();
            $('.navNews').show();
            $('.navInput').click(function(){
              $('.navNews').animate({
                'top':'0',
                 'font-size':'12px'
            },250)
        })

     $('.removeSearch').click(function(){
             $('.navInput').fadeOut(250);
                  $('.navNews').animate({
                     'top':'10px',
                     'font-size':'26px'
            },10)

               $(this).hide();
               $('.navNews').hide()
                 $('.removeSearch').hide();
     })
  })
  $('.aboutModern').click(function(){
      $('.navInput').fadeOut(250);
         $('.navNews').hide()
                 $('.removeSearch').hide();
                   $('.navInput').fadeOut(250);
                  $('.navNews').animate({
                     'top':'10px',
                     'font-size':'26px'
            },10)
  })
})