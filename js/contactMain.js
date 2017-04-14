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
