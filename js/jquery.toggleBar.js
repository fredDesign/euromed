$(document).ready( function () {


	 //checkHover
			// On cache les sous-menus
			// sauf celui qui porte la classe "open_at_load" :

			$(".toggleMain:not('.open_at_load')").hide();
			
			$(".toggleMain.open_at_load").addClass("open");
			$(".open_at_load").show();

			// On modifie l'evenement "click" sur les liens dans les items de liste
			// qui portent la classe "toggleSubMenu" :

		
	
    
  } ) ;
