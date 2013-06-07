(function($){
			$.fn.swo_compare = function(elem,value_read){
				var parent=$("div.test_compare");
				 //$("a.test_compare" ).hover(function(value_read) { 
				 elem.hover(
					function() { alert(value_read);
						//$("div.test_compare").empty();
						this.empty();
						//$.each(studioName , function(key, value) { 
						$.each(value_read, function(key, value) { 
						alert("ok");
							parent.prepend(value);
							});
						$("div.test_compare").slideDown('fast'); 
						
						} 
					, function() { 
						$("div.test_compare").slideUp('fast'); } 
						);
						
					};  
					})(jQuery); 