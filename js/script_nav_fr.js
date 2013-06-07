$(document).ready(function(){  
  
 //Only shows drop down trigger when js is enabled (Adds empty span tag after ul.navNiv1*)  
  
$("#nav_prem ul.navNiv0 li.niv1 a.niv1  ").hover(function() {
			$(this).parent().parent().children().removeClass("subhover")
			//Following events are applied to the navNiv1 itself (moving navNiv1 up and down)  
			$(this).parent().find("ul.navNiv1").slideDown('fast').show(); //Drop down the navNiv1 on click  
			$(this).parent().addClass("subhover"); //On hover over, add class "subhover"  
			$(this).parent().hover(function() {  
			}, function(){  
				$(this).parent().find("ul.navNiv1").slideUp('fast',function() { $(this).css("height", "auto"); } ); 
				//When the mouse hovers out of the navNiv1, move it back up 
				$(this).parent().removeClass("subhover");				
			});  
        //Following events are applied to the trigger (Hover events for the trigger)  
        }, function(){  //On Hover Out  
             //On hover out, remove class "subhover"  
      }); 

$("#nav_prem ul.navNiv0 li.niv1  ").hover(function() {  },
	  function(){  
				$(this).parent().find("ul.navNiv1").slideUp('fast',function() { $(this).css("height", "auto"); } ); 
				//When the mouse hovers out of the navNiv1, move it back up 
				$(this).parent().removeClass("subhover");				
			})
			
$("#nav_prem ul.navNiv0").hover(function() {  }, function() { 
	$(this).children().removeClass("subhover")
	
	}); 	 
	  
   /*****nav langue **********/
$('form#langForm  a').click (
							
									function() {
									var inputTarget=$(this).attr("inputtarget");
									var reponse=$(this).attr("send");
									var inputlabel=$(this).text();	
									$('input#'+inputTarget).attr("value", reponse);	
									$('input#'+inputTarget).addClass("subhover");	
									
									$('#langForm').submit();
									return false;
		
								}	)

								
  }); 

