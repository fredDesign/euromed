var isIE6 = ((navigator.userAgent.indexOf("MSIE 6.") != -1) && (navigator.userAgent.indexOf("Opera") == -1));
var isIE7 = ((navigator.userAgent.indexOf("MSIE 7.") != -1) && (navigator.userAgent.indexOf("Opera") == -1));
var isChrome = ((navigator.userAgent.indexOf("Chrome") != -1));
var isSafari = ((navigator.userAgent.indexOf("Safari") != -1));
 
 
 jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
    return this;
}
 jQuery.fn.centerHoriz = function () {
    this.css("position","absolute");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
    return this;
}
 jQuery.fn.centerHorizHalo = function () {
    this.css("position","absolute");
    this.css("left", (($(window).width() - 1468) / 2) + $(window).scrollLeft() + "px");
    return this;
}

 jQuery.fn.heightTot = function () {
    this.css("height", ($(window).height() + "px"));
    return this;
}
 jQuery.fn.widthTot = function () {
    this.css("width", ($(window).width() + "px"));
    return this;
}

 jQuery.fn.heightTot2 = function () {
    this.css("height", ($("#containerGlobal").height() + "px"));
    $(".block_hallo ").css("position","absolute");
    return this;
}



function doCenterHoris(tothing) {
    tothing.centerHoriz();
};
function doWidthHoris(tothing) {
    tothing.widthTot();
};


function doHeightTot(tothing) {
    tothing.heightTot();
};
function doHeightTot2(tothing) {
    tothing.heightTot2();
};




$(document).ready(function(){
$(".clickable").click(
function()
{
    window.location = $(this).attr("url");
}).hover(
function()
{
   $(this).addClass('overblock');
},
function()
{
   $(this).removeClass('overblock');
}
);




	
	//background for input on hover anf focus
	$("input").hover(function(){
		$(this).addClass("write_hover");
	},function(){
		$(this).removeClass("write_hover");
	});
	
	$("input").click(function(){
		$(this).addClass("write");
	});
	
	$("input").blur(function(){
		$(this).removeClass("write");
	});
	
	$("input").focus(function(){
		$(this).addClass("write");
	});
	
	$("textarea").hover(function(){
		$(this).addClass("write_hover");
	},function(){
		$(this).removeClass("write_hover");
	});
	
	$("textarea").click(function(){
		$(this).addClass("write");
	});
	
	$("textarea").blur(function(){
		$(this).removeClass("write");
	});
	
	$("textarea").focus(function(){
		$(this).addClass("write");
	});
	
	$("#contact_form #name").addClass("write");
	$("#contact_form #name").focus();
	
	$(".blockLink").hover(function(){
		$(this).addClass("blockHover");
		$(".blockHover").click(function(){
			var link= $(this).attr('rel');
			window.location.replace(link);
		});
	
		
	},function(){
		$(this).removeClass("blockHover");
		$(".blockHover").unbind();
		
	});
	
    
    
     $(".back-dyn").widthTot();
    $("#root2").widthTot();
    $("#root").centerHoriz();
    $("#imgBg").centerHoriz();
    $("#root2").centerHoriz();
    $("#infosHome").centerHoriz();
    $(".news_last").centerHoriz();
    $("#halo").centerHorizHalo();
    $("#halo").heightTot2();
    $(".back-dyn").heightTot();
    
    
    $(window).resize(function() {  doWidthHoris($("#root2"));doWidthHoris($(".back-dyn"));doCenterHoris($("#halo"));doCenterHoris($("#imgBg"));doCenterHoris($("#root"));doCenterHoris($("#root2"));doCenterHoris($(".news_last"));doHeightTot($(".back-dyn")) 
                                    });
    	


/**************************/
  
/*****nav langue **********/
$('form#langForm a').click (
function() {
var inputTarget=$(this).attr("data-inputtarget");
var reponse=$(this).attr("data-send");
var inputlabel=$(this).text();
$('input#'+inputTarget).attr("value", reponse);
$('input#'+inputTarget).addClass("subhover");
$('#langForm').submit();
return false;
} )


    


});


