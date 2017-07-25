/* for fancybox */
$(document).ready(function(){
    $('.navbar').click(function(){
        $('.menu').toggle();
    });
});

$(function() {
    $(".contact a").fancybox({
        helpers : {
        title: {
            type: 'inside',
            position: 'top'
        }
    },
        openEffect  : 'none',
        closeEffect : 'none'
    });

});

$(function() {
    $(".photo a").fancybox({
        openEffect  : 'none',
        closeEffect : 'none'
    });

});
