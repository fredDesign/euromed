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


     $("a.test_compare_trucks ").css({"opacity":"0.55"});
			$("#truck_list").tablesorter({widgets: ['zebra'], 
										  headers: { 0: { sorter: false  } }});

			$("table#truck_list tr").hover(
			   function() {$(this).addClass('hover');},
			   function() {$(this).removeClass('hover'); }); 


   $("a.test_compare_trucks ").hover(function() { 
     $("a.test_compare_trucks ").css({"opacity":"1"});
   $("div.test_compare_trucks").stop();

				$("div.test_compare_trucks").empty();
				
				if(typeof(studioName) != "undefined"){ 
					if (studioName.length>1 ) {
					$.each(studioName, function(key, value) { 
					
					$("div.test_compare_trucks").prepend(value);
					})}
					if (studioName.length<2 ) {
					$("div.test_compare_trucks").empty();
					$("div.test_compare_trucks").prepend("<a>Minimum 2 trucks /camions</a>");
					}
		
					$("div.test_compare_trucks").stop();
					$("div.test_compare_trucks").fadeIn("slow", function () {
						$("div.test_compare_trucks").css({"opacity":"1"});
					  }) 
					  }
					  } , 
								function() {      $("a.test_compare_trucks ").css({"opacity":"0.55"});
					$("div.test_compare_trucks").fadeOut("slow", function () {
						$("div.test_compare_trucks").css({"opacity":"0","height":"auto"});
					  });
					  } );
		
		
   $(".compareTd ").hover(function() { 
			if(typeof(studioName) != "undefined"){ 
							$("a.test_compare_trucks ").css({"opacity":"1"});
						
							$("div.test_compare_trucks").empty();
							
							if (studioName.length>1 ) {
								$.each(studioName, function(key, value) { 
								
													$("div.test_compare_trucks").prepend(value);
													})
							}
							
							if (studioName.length<2 ) {
								$("div.test_compare_trucks").empty();
								$("div.test_compare_trucks").prepend("<a>Minimum 2 trucks /camions</a>");
							} 
							
							$("div.test_compare_trucks").stop();
							$("div.test_compare_trucks").fadeIn("slow", function () {
								$("div.test_compare_trucks").css({"opacity":"1"});
							  }) 
					  }
					  
					  } , 
					function() {
     $("a.test_compare_trucks ").css({"opacity":"0.55"});
					 
					$("div.test_compare_trucks").fadeOut("slow", function () {
						$("div.test_compare_trucks").css({"opacity":"0","height":"auto"});
					  }); 
					  
					  } 
			);
		
		

		})


		
$(function() {

                var COOKIE_NAME = 'compare_truck';
                var COOKIE_LINK = 'truck_names';
								if (!($.cookie(COOKIE_LINK))) {
                    $.cookie(COOKIE_NAME, null, { path: '/', expires: 1 });
                    $.cookie(COOKIE_LINK, null, { path: '/', expires: 1 });
					}
                var options = { path: '/' };


		$('.master').click(function() {	
		if ($(this).hasClass("active")){}
			else {
			$.cookie(COOKIE_NAME, null, options);
			$.cookie(COOKIE_LINK, null, options);
			}
		})

		

                // set cookie by number of days
                $('a.compare').click(function() {
				
					if (typeof(sendValue) != 'undefined'){}else {sendValue=new Array();}
					if (typeof(studioName)!='undefined') {}else {studioName=new Array();}
					


					var val=$(this).attr('add_comp');
					var studio_link=$('#name'+val).html();
					
					
					studioName.unshift(studio_link);
					studioName = studioName.unique();
					$("div.test_compare_trucks").empty();
					if (studioName.length>3 ) {
						studioName.pop();
						
						$("div.test_compare_trucks a:last").remove();
						
						$.cookie(COOKIE_NAME, sendValue, options);
						$.cookie(COOKIE_LINK, studioName, options);
						$("div.test_compare_trucks").empty();
						$.each(studioName, function(key, value) { 
						$("div.test_compare_trucks").prepend(value);
						 
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
						$("div.test_compare_trucks").empty();
						$.each(studioName, function(key, value) { 
						$("div.test_compare_trucks").prepend(value);
						 
						});
						
						
						}
						
					if (sendValue.length>1 ) {
						$('a.test_compare_trucks').css("display","block");
						$('div.comparator_items').css("display","block");
						
						$.cookie(COOKIE_NAME, sendValue, options);
						$.cookie(COOKIE_LINK, studioName, options);
						$("div.test_compare_trucks").empty();
						$.each(studioName, function(key, value) { 
						$("div.test_compare_trucks").prepend(value);
						 
						});
						}
											
					if (sendValue.length<2) {
						$('a.test_compare_trucks').css("display","block");
						$('div.comparator_items').css("display","block");  
						
						$.cookie(COOKIE_NAME, sendValue, options);
						$.cookie(COOKIE_LINK, studioName, options);
						$("div.test_compare_trucks").empty();
						$("div.test_compare_trucks").prepend("<a>Minimum 2 trucks /camions</a>");
						 

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
						$("div.test_compare_trucks").empty();
						$.each(studioName, function(key, value) { 
						$("div.test_compare_trucks").prepend(value);
						 
						});
						if (sendValue.length<2) {
							
						$("div.test_compare_trucks").empty();
						$("div.test_compare_trucks").prepend("<a>Minimum 2 trucks /camions</a>");
								}
						
						} else {
						$(this).addClass("compOK");
						}
						
					
                    return false;
                }
				
				
				);

                // get cookie
                $('a.test_compare_trucks').click(function() {

                    
                });
								if (!($.cookie(COOKIE_LINK))) {

					}else {
				studioName=$.cookie(COOKIE_LINK).split(",");
				sendValue=$.cookie(COOKIE_NAME).split(",");		
				if (sendValue.length>2 ) {
					$('a.test_compare_trucks').css("display","block");
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
					$("div.test_compare_trucks").prepend(value);
					 
					});

					}
					
                // delete cookie
                $('a.reset_comp').click(function() {
                    $.cookie(COOKIE_NAME, null, options);
                    return false;
                });
				
				

		
		
		$(window).unload( function () { 
		/*
		$.cookie(COOKIE_NAME, null, options);
		$.cookie(COOKIE_LINK, null, options);
		*/
                    return false; } );
		// delete cookie
		$('a.reset_comp').click(function() {

			$.cookie("compare_truck", null, { path: '/', expires: 1 });
			$.cookie("truck_names", null, { path: '/', expires: 1 });
			location.reload();
			return false;
		});
				
				
});




