/* CRITERIA 16: toggle navigation menu */
$(document).ready(function(){
    $('.navbar').click(function(){
        $('.menu').toggle();
    });
});

/* CRITERIA 18: minimum of two different modern effects (hide & show)*/
/* CRITERIA 19: minimum of two custom effects (1 of them ; animate)*/
/* CRITERIA 20: minimum of three different effects (1 of them ; mouse) */
$(function(){
    $('.sel_who').on('click', function(){ 
        $('.cover').animate({ 'width': '100%' }, 'slow', function(){      
            $('.cover').show();
        });       
    });       
    $('.sel_who').on('dblclick', function(){   
        $('.cover').animate({ 'width': '0px' }, 'slow', function(){      
            $('.cover').hide();
        });
    });           
});

/* CRITERIA 19: minimum of two custom effects (2 of them ; animate)*/
$(function() {
    $( "#car" ).animate({ left: "+=100px" }, 3000 );
}); 


/* CRITERIA 21: minimum of one interaction */
$(function() {
    $( "#car" ).draggable();
    $( ".highlight" ).droppable({
      drop: function( event, ui ) {
        $(location).attr('href', 'index.html');
      }
    });
  });

