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