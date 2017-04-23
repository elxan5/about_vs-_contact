$(document).ready(function(){
   /*Our team*/
  $('.aboutProfile').hide();
  $('.aboutAllView').mouseover (function(){
      var team=$('.aboutAllView').index(this);
         $(this).css({
          	'top':-50+'px'
         });
         $('.aboutProfile:eq(' + team + ')').show();
      })
  $('.aboutAllView').mouseout (function(){
     var team=$('.aboutAllView').index(this);
        $('.aboutProfile:eq('+team+')').hide();     
           $('.aboutAllView').css({
           	'top':0
        });
    });
 });
      /*end Our Team*/

      /*TestiMonials*/
$(function(){
  $('.testiPeople').hide();
      $('.testiPeople:first').show(); 
      $('.dot:first').addClass('dotActive');
  $('.dot').click(function(){
    var dotIndex=$(this).index();
      $('.dot').removeClass('dotActive');
      $(this).addClass('dotActive');
          $('.testiPeople').stop().hide();
          $('.testiPeople:eq(' + dotIndex + ')').stop().fadeIn(1000);
    });

});
/*end testimonials*/

  /*start navbar*/
$(function(){
  $(".navBar ul li").hover(function() {
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
            "left": "7px",
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
     });
  });
  $('.aboutModern').click(function(){
      $('.navInput').fadeOut(250);
         $('.navNews').hide()
                 $('.removeSearch').hide();
                   $('.navInput').fadeOut(250);
                  $('.navNews').animate({
                     'top':'10px',
                     'font-size':'26px'
            },10)
  });
});
/*end navbar*/