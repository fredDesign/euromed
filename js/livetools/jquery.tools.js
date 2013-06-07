/*function testURL() {
	szURL = document.URL.replace("http://", "");
	componentList = szURL.split('/');
	componentList.shift();
	niVdepart=componentList[0];
	var reg=new RegExp(",","g")
	szLienrel="/"+componentList.toString().replace(reg,"/");
	return szLienrel;
}


 


function goto(url) {
    window.location.href = url;
};
*/

function menuVert(liste,haut){
	var menu_h=0;
	menu_h=liste.height();
	liste.children(" li").each(function(i){
		menu_h=i;
		});
	var navDuration = 150; //time in miliseconds

	$(".open_at_load ul li.inplace").clone().prependTo(".open_at_load ul.menuTrucks");
	$(".open_at_load ul li.inplace:eq(1)").remove();
	


	
	 

	 };
/*
////////////////////////////////////////

//Lorsque la souris quitte le lien
$("div#contain dl ").mouseout(function(){
			$("div#contain dl ").stop().animate(
			{height: '22px'},
			100)
			$("div#contain dd").stop().animate(
			{height: '0px'},
			100)
			$("div#contain").stop().animate(
			{height: '40px'},
			100)
});

*/

function activation () {
	$("#truck_search_widget  a.active").each(function(i){
		$(this).parent().addClass("active onURL");
		var block_actif=$(this).attr("target_Block");
		$("#"+block_actif).addClass("active onURL");
		$("#"+block_actif+"_block").addClass("open_at_load");
		
		
		///////////////////////////////////////////////


			$(".toggleMain:not('.open_at_load')").hide();
			
			$(".toggleMain.open_at_load").addClass("open");
			$(".open_at_load").show();

			// On modifie l'evenement "click" sur les liens dans les items de liste
			// qui portent la classe "toggleSubMenu" :

		
	
    
/////////////////////////////////	
	});
 }
 
 
function setlang(lang) {
    $("input[name=language]").val(lang);
    $("#change_language").submit();
}



function verifForm(){

 $("#search_form input").each(function(i){

  var value_temp=$(this).attr("valeurbase");
  var value_act=$(this).attr("value");
  if ($(this).attr("valeurbase")){
   if (value_act==value_temp) {
		$(this).attr("value","");
		/*$(this).attr("value")="no";*/
		value_act=$(this).attr("value");
	}   
   
   }

 });
   $("#search_form").submit();
 
 
  
}

function loaderAjax(){
$("a.loader").click(function() { 
	var recipient=$(this).attr("recipient");
    $.ajax({ 
        type: "POST", 
        url: $(this).attr("href"), 
        success: function(retour){ 
            $("#"+recipient).empty().append(retour); 
        } 
    }); 
	return false;
});
}

function initialize(linkList) {
link=$(linkList).eq(0);
link.parents("li:eq(0)").addClass("active");
	var recipient=link.attr("recipient");
$.ajax({ 
        type: "POST", 
        url: link.attr("href"), 
        success: function(retour){ 
            $("."+recipient).empty().append(retour); 
        } 
    }); 

}


$(document).ready(function()
{ 
$("#comparator td:contains('True')").addClass('trueimage');
$("#comparator td:contains('False')").addClass('trueimage');
$("tr.truck_item").hover(function(){
   $(this).addClass("hoverTr");
 },function(){
   $(this).removeClass("hoverTr");
 });
 


loaderAjax();
/*********************** ici on test l'url et on se charge de montrer l'onglet avtif*************************/
activation();

menuVert($(".open_at_load .menuTrucks "),30);


/**** ici on charge les champs s'il sont vides****/
 $("#search_form input").each(function(i){

  var value_temp=$(this).attr("valeurbase");
  var value_act=$(this).attr("value");
  if ($(this).attr("valeurbase")){
   if (value_act=="") {
		$(this).attr("value",value_temp);
		/*$(this).attr("value")="no";*/
		value_act=$(this).attr("value");
		
	}   
   
   }
/**** ici on charge les champs s'il sont vides****/
   
});


});

		
