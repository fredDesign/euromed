 if(!Array.prototype.unique){
 Array.prototype.unique =
  function() {
    var a = [];
    var l = this.length;
    for(var i=0; i<l; i++) {
      for(var j=i+1; j<l; j++) {
        if (this[i] === this[j])
          j = ++i;
      }
      a.push(this[i]);
    }
    return a;
  };
}

if(!Array.prototype.indexOf){
    Array.prototype.indexOf=function(obj,start){
        for(var i=(start||0),j=this.length;i<j;i++){
            if(this[i]==obj){return i;}
        }
        return -1;
    }
}
$(document).ready(function() { 
/*
	if(typeof(studioName) != "undefined"){ 
		
		if (studioName.length>1 ) {
				$(".test_compare_cadre").removeClass("none");
					$(".reset_compare").removeClass("none");
					$.each(studioName, function(key, value) { 
					$("div.test_compare").prepend(value);
				})
		};
		if (studioName.length<2 ) {
				$(".test_compare_cadre").removeClass("none");
				$(".reset_compare").removeClass("none");
				$("div.test_compare").empty();
				$("div.test_compare").prepend("<a>selectionner au minimum 2 plateaux</a>");
		};
		}
		else {
		$("div.test_compare").prepend("<a>selectionner au minimum 2 plateaux</a>");
		$(".test_compare_cadre").addClass("none");
		$(".reset_compare").addClass("none");
		

	}*/
	
     $("a.test_compare ").css({"opacity":"0.55"});
			$("#table_list").tablesorter({widgets: ['zebra'], 
										  headers: { 0: { sorter: false  } }});

			$("table tr").hover(
			   function() {$(this).addClass('hover');},
			   function() {$(this).removeClass('hover'); }); 


 $("a.test_compare ").hover(function() { 
     $("a.test_compare ").css({"opacity":"1"});
				
					$("div.test_compare").empty();
					if(typeof(studioName) != "undefined"){ 
	
						if (studioName.length>1 ) {
								/*$(".test_compare_cadre").removeClass("none");*/
								$(".reset_compare").removeClass("none");
								$.each(studioName, function(key, value) { 
									$("div.test_compare").prepend(value);
								})
						};
						if (studioName.length<2 ) {
								/*$(".test_compare_cadre").removeClass("none");*/
								$(".reset_compare").removeClass("none");
								$("div.test_compare").empty();
								$("div.test_compare").prepend("<a>Minimum 2 stages/plateaux</a>");
						};
						}
					else {
						$("div.test_compare").prepend("<a>Minimum 2 stages/plateaux</a>");
						/*$(".test_compare_cadre").addClass("none");*/
						$(".reset_compare").addClass("none");

					}
						
					
					$("div.test_compare").stop();
					$("div.test_compare").fadeIn("slow", function () {
						$("div.test_compare").css({"opacity":"1"});
					  }) 
					  } , 
		function() {
     $("a.test_compare ").css({"opacity":"0.55"});
					 
					$("div.test_compare").fadeOut("slow", function () {
						$("div.test_compare").css({"opacity":"0","height":"auto"});
					}); 
					  
				} );
					  
					  
					  /**/
		
		
  $(".compareTd ").hover(function() { 
     $("a.test_compare ").css({"opacity":"1"});
				
					$("div.test_compare").empty();
					if(typeof(studioName) != "undefined"){ 
	
						if (studioName.length>1 ) {
								/*$(".test_compare_cadre").removeClass("none");*/
								$(".reset_compare").removeClass("none");
								$.each(studioName, function(key, value) { 
									$("div.test_compare").prepend(value);
								})
						};
						if (studioName.length<2 ) {
								$(".test_compare_cadre").removeClass("none");
								(".reset_compare").removeClass("none");
								$("div.test_compare").empty();
								$("div.test_compare").prepend("<a>Minimum 2 stages/plateaux</a>");
						};
						}
					else {
						$("div.test_compare").prepend("<a>Minimum 2 stages/plateaux</a>");
						/*$(".test_compare_cadre").addClass("none");*/
						$(".reset_compare").addClass("none");

					}
						
					
					$("div.test_compare").stop();
					$("div.test_compare").fadeIn("slow", function () {
						$("div.test_compare").css({"opacity":"1"});
					  }) 
					  } , 
		function() {
     $("a.test_compare ").css({"opacity":"0.55"});
					 
					$("div.test_compare").fadeOut("slow", function () {
						$("div.test_compare").css({"opacity":"0","height":"auto"});
					}); 
					  
				} );
		
		
	})


		
$(function() {

                var COOKIE_NAME = 'compare_cookie';
                var COOKIE_LINK = 'studio_names';
				
                //var options = { path: '/', expires: 10 };
				var options = { path: '/', expires: 1 };
				if (!($.cookie(COOKIE_LINK))) {
                    $.cookie(COOKIE_NAME, null, { path: '/', expires: 1 });
                    $.cookie(COOKIE_LINK, null, { path: '/', expires: 1 });
					}
                // set cookie by number of days
                $('a.compare').click(function() {
				
					if (typeof(sendValue) != 'undefined'){}else {sendValue=new Array();}
					if (typeof(studioName)!='undefined') {}else {studioName=new Array();}
					


					var val=$(this).attr('add_comp');
					var studio_link=$('#name'+val).html();
					
					
					studioName.unshift(studio_link);
					studioName = studioName.unique();
					$("div.test_compare").empty();
					if (studioName.length>3 ) {
						studioName.pop();
						
						$("div.test_compare a:last").remove();
						
						$.cookie(COOKIE_NAME, sendValue, options);
						$.cookie(COOKIE_LINK, studioName, options);
						$("div.test_compare").empty();
						$.each(studioName, function(key, value) { 
						$("div.test_compare").prepend(value);
						 
						});

						}
						
					sendValue.unshift(val);
					sendValue = sendValue.unique();
					if (sendValue.length>3 ) {
						erasevalue=sendValue[3];
						$('#'+erasevalue+' a').removeClass("compOK");
						sendValue.pop();
						$.cookie(COOKIE_NAME, sendValue, options);
						$.cookie(COOKIE_LINK, studioName, options);
						$("div.test_compare").empty();
						$.each(studioName, function(key, value) { 
						$("div.test_compare").prepend(value);
						 
						});
						
						
						}
						
					if (sendValue.length>1 ) {
						$('a.test_compare').css("display","block");
						$('div.comparator_items').css("display","block");
						
						$.cookie(COOKIE_NAME, sendValue, options);
						$.cookie(COOKIE_LINK, studioName, options);
						$("div.test_compare").empty();
						$.each(studioName, function(key, value) { 
						$("div.test_compare").prepend(value);
						 
						});
						}
											
					if (sendValue.length<2) {
						$('a.test_compare').css("display","block");
						$('div.comparator_items').css("display","block");
						
						$.cookie(COOKIE_NAME, sendValue, options);
						$.cookie(COOKIE_LINK, studioName, options);
						$("div.test_compare").empty();
						$("div.test_compare").prepend("<a>Minimum 2 stages/plateaux</a>");
						 

						}


					
					if ($(this).hasClass("compOK")){
					/****probleme ie sendValue.indexOf(val)********/
						var valstr=""+val;
						var indexDelete=sendValue.indexOf(""+valstr);
						sendValue.splice(indexDelete,1);
						studioName.splice(indexDelete,1);
						/*************/
						$(this).removeClass("compOK");
						
						$.cookie(COOKIE_NAME, sendValue, options);
						$.cookie(COOKIE_LINK, studioName, options);
						$("div.test_compare").empty();
						$.each(studioName, function(key, value) { 
						$("div.test_compare").prepend(value);
						 
						});
						if (sendValue.length<2) {
							
						$("div.test_compare").empty();
						$("div.test_compare").prepend("<a>Minimum 2 stages/plateaux</a>");
								}
						
						} else {
						$(this).addClass("compOK");
						}
						
										 
					 $('a.reset_comp').click(function() {

                    $.cookie("compare_cookie", null, { path: '/', expires: 1 });
                    $.cookie("studio_names", null, { path: '/', expires: 1 });
					location.reload();
					return false;
					});
					
                    return false;
                }
				
				
				);

                // get cookie
                $('a.test_compare').click(function() {


                    
                });
				if (!($.cookie(COOKIE_LINK))) {

					}else {
				studioName=$.cookie(COOKIE_LINK).split(",");
				sendValue=$.cookie(COOKIE_NAME).split(",");	
				
				if (sendValue.length>2 ) {
					$('a.test_compare').css("display","block");
						$('div.comparator_items').css("display","block");
				
				}
				$.each(sendValue, function(key, value) { 

					if($('#'+value+' a').length >= 0){
					$('#'+value+' a').addClass("compOK");
					 
					  }
					  
					if($('.'+value).length >= 0){
					  $('.'+value).removeClass("no_view");
					  }
					  
					});
				
					
				$.each(studioName, function(key, value) { 
					$("div.test_compare").prepend(value);
					 
					});

				}
					
                // delete cookie
                $('a.reset_comp').click(function() {

				

				
                    $.cookie("compare_cookie", null, { path: '/', expires: 1 });
                    $.cookie("studio_names", null, { path: '/', expires: 1 });
					location.reload();
					return false;
                });
				
				
				/**
		$(window).unload( function () { 
		$.cookie(COOKIE_NAME, null, options);
		$.cookie(COOKIE_LINK, null, options);
                    return false; } );
				**/
				
});
