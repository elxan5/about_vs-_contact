$(function(){
  $(".allDropDown ul li").hover(function() {
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