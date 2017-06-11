/*part.16, 17, 18_used toggle and slide*/
function toggleDiv(divId) {
   $("#"+divId).slideToggle();
}

/*used fancy box*/
 $(document).ready(function() {
	               $(".fancybox").fancybox({
	                    openEffect  : 'none',
	                    closeEffect : 'none',
	                    afterClose : (function() {location.reload();return;})
	                  });
	           });

 /*part.18_used hide and show*/
$(document).ready(function(){
    $("#hide").click(function(){

        $("#notice_t").hide();
    });
    $("#show").click(function(){
        $("#notice_t").show();
    });
});

 /*part.19_used animate*/
$(document).ready(function(){
    $("button").click(function(){
        var div = $("#ani_box");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});

/*part.20_used form event*/
function myFunction() {
    alert("The form was reset");
}

/*part.20_used keyboard event*/
function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

/*part.20_used mouse event*/
function mouseDown() {
    document.getElementById("notice_t").style.color = "red";
}

function mouseUp() {
    document.getElementById("notice_t").style.color = "green";
}

/*part.21_used droppable*/
 function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function dragEnd(event) {
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}
/*part.18_used hide and show*/
$(function () {
  $("#btnHide").click(function () {
    $("#notice_t").hide(600);
  });

  $("#btnShow").click(function () {
    $("#notice_t").show(600);
  })
})