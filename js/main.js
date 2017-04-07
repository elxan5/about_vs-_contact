$(function(){
$('.tab:first').addClass('active');
$('.box').hide();
$('.box:first').show();
$('.tab').click(function(){
	var index=$(this).index();
     $('.tab').removeClass('active');
     $(this).addClass('active');
     $('.box').stop().hide(200);
     $('.box:eq(' + index + ')').stop().show(200);
})
});
