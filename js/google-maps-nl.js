// Example #1 : Style is stored in a variable


			$(function() {

var roadAtlasStyles2 = [

		{ 
		featureType: "water", 
		elementType: "all", 
		stylers: [ 
				  { visibility: "on" }, 
				  { hue: "#000000" }, 
				  { saturation: -79 }, 
				  { gamma: 0.84 } ] },
		{ 
		featureType: "landscape.man_made", 
		elementType: "all", 
		stylers: [ 
				  { saturation: -100 }, 
				  { hue: "#000000" }, 
				  { visibility: "off" } ] },
		{ 
		featureType: "landscape", 
		elementType: "all", 
		stylers: [ 
				  { saturation: -100 }, 
				  { lightness: 20 },
				  { hue: "#FFFFFF" } ] },
		{ 
		featureType: "administrative.land_parcel", 
		elementType: "all", 
		stylers: [ 
				  { visibility: "off" },
				  { gamma: 3 } ] },{ 
		featureType: "administrative", 
		elementType: "all", 
		stylers: [ 
				  
				  { gamma: 3 } ] },
		{ 
		featureType: "road.local", 
		elementType: "all", 
		stylers: [ 
				  { saturation: -100 }, 
				  { lightness: 20 },
				  { visibility: "on" } ] },
		{ 
		featureType: "poi.park", 
		elementType: "geometry", 
		stylers: [ 
				  { hue: "#000000" }, 
				  { saturation: -100 }, 
				  { gamma: 3 },
				  { lightness: 46 } ] },
		{ 
		featureType: "poi", 
		elementType: "labels", 
		stylers: [ 
				  { hue: "#ffc300" }, 
				  { gamma: 3 },
				  { saturation: -100 }, 
				  { visibility: "off" } ] },
		{ 
		featureType: "road", 
		elementType: "labels", 
		stylers: [ 
				  { hue: "#ffffff" },
				  { saturation: -100 },
				  { gamma: 3 },
				  { visibility: "on" } ] },
		{ 
		featureType: "landscape", 
		elementType: "labels", 
		stylers: [ 
				  { visibility: "off" } ] },
		{ 
		featureType: "water", 
		elementType: "labels", 
		stylers: [ 
				  { visibility: "off" } ] },
		{ 
		featureType: "water", 
		elementType: "geometry", 
		stylers: [ 
				  { saturation: -100 },
				  { visibility: "on" } ] },
		{ 
		featureType: "road.arterial", 
		elementType: "all", 
		stylers: [ 
				  { hue: "#ffcc00" }, 
				  { lightness: 30 }, 
				  { saturation: -100 } ] },
		{ 
		featureType: "road.highway", 
		elementType: "geometry", 
		stylers: [ 
				  { hue: "#ffc300" }, 
				  { saturation: -100 }, 
				  { lightness: 10 } ] },
		{ 
		featureType: "landscape.natural", 
		elementType: "all", 
		stylers: [ 
				  { visibility: "off" } ] },
		{ 
		featureType: "all", 
		elementType: "all", 
		stylers: [ ] },
		{ 
		featureType: "poi", 
		elementType: "geometry",
		stylers: [ 
				  { visibility: "off" } ] },
		{ 
		featureType: "transit", 
		elementType: "labels", 
		stylers: [ 
				  { visibility: "off" } ] },
		{ 
		featureType: "transit.line", 
		elementType: "geometry", 
		stylers: [ 
				  { visibility: "off" } ] },
		{ 
		featureType: "all", 
		elementType: "all", 
		stylers: [ ] }

];
 
$('#map_canvas').gmap3(
// Add a style without create the map
{ action: 'addStyledMap',
id: 'style1',
options:{
name: 'Style 1'
},
style : [


		{ 
		featureType: "water", 
		elementType: "all", 
		stylers: [ 
				  { visibility: "on" }, 
				  { hue: "#000000" }, 
				  { saturation: -79 }, 
				  { gamma: 0.84 } ] },
		{ 
		featureType: "landscape.man_made", 
		elementType: "all", 
		stylers: [ 
				  { saturation: -100 }, 
				  { hue: "#000000" }, 
				  { visibility: "off" } ] },
		{ 
		featureType: "landscape", 
		elementType: "all", 
		stylers: [ 
				  { saturation: -100 }, 
				  { lightness: 20 },
				  { hue: "#FFFFFF" } ] },
		{ 
		featureType: "administrative.land_parcel", 
		elementType: "all", 
		stylers: [ 
				  { visibility: "off" } ] },
		{ 
		featureType: "road.local", 
		elementType: "all", 
		stylers: [ 
				  { saturation: -100 }, 
				  { lightness: 20 },
				  { gamma: 3 },
				  { visibility: "on" } ] },
		{ 
		featureType: "poi.park", 
		elementType: "geometry", 
		stylers: [ 
				  { hue: "#000000" }, 
				  { gamma: 3 },
				  { saturation: -100 }, 
				  { lightness: 46 } ] },
		{ 
		featureType: "poi", 
		elementType: "labels", 
		stylers: [ 
				  { hue: "#ffc300" }, 
				  { saturation: -100 }, 
				  { gamma: 3 },
				  { visibility: "off" } ] },
		{ 
		featureType: "poi.attraction", 
		elementType: "labels", 
		stylers: [ 
				  { hue: "#ffc300" }, 
				  { saturation: -100 }, 
				  { gamma: 3 },
				  { visibility: "off" } ] },
		{ 
		featureType: "road", 
		elementType: "labels", 
		stylers: [ 
				  { hue: "#FFFFFF" },
				  { saturation: -100 },
				  { gamma: 3},
				  { visibility: "on" } ] },
		{ 
		featureType: "landscape", 
		elementType: "labels", 
		stylers: [ 
				  { visibility: "off" } ] },
		{ 
		featureType: "water", 
		elementType: "labels", 
		stylers: [ 
				  { visibility: "off" } ] },
		{ 
		featureType: "water", 
		elementType: "geometry", 
		stylers: [ 
				  { saturation: -100 },
				  { visibility: "on" } ] },
		{ 
		featureType: "road.arterial", 
		elementType: "all", 
		stylers: [ 
				  { hue: "#ffcc00" }, 
				  { lightness: 30 }, 
				  { gamma: 3 },
				  { saturation: -100 } ] },
		{ 
		featureType: "road.highway", 
		elementType: "geometry", 
		stylers: [ 
				  { hue: "#ffc300" }, 
				  { gamma: 3 },
				  { saturation: -100 }, 
				  { lightness: 10 } ] },
		{ 
		featureType: "landscape.natural", 
		elementType: "all", 
		stylers: [ 
				  { visibility: "off" } ] },
		{ 
		featureType: "all", 
		elementType: "all", 
		stylers: [ ] },
		{ 
		featureType: "poi", 
		elementType: "geometry",
		stylers: [ 
				  { visibility: "off" } ] },
		{ 
		featureType: "transit", 
		elementType: "labels", 
		stylers: [ 
				  { visibility: "off" } ] },
		{ 
		featureType: "transit.line", 
		elementType: "geometry", 
		stylers: [ 
				  { visibility: "off" } ] },
		{ 
		featureType: "all", 
		elementType: "all", 
		stylers: [ ] }
]
},
// create a new style and active it after having created the map
{ action: 'setStyledMap',
// implicit init - - - - -
map:{
center:{
lat:52.2351344,
lng:5.1726535	
},
zoomControlOptions: {
position: google.maps.ControlPosition.RIGHT_TOP
},
zoom:10,
mapTypeId: google.maps.MapTypeId.ROADMAP, 
scrollwheel: true,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
	streetViewControl: false,

mapTypeControlOptions: {
mapTypeIds: []
}
},
// - - - - - - - - - - - -
styledmap:{
id: 'style2',
style: roadAtlasStyles2,
options:{
name: 'Style 2'
}
}
},
{action: 'addMarker',
icon:("/static/img/marker_emg.png"),
latLng:[52.2351344 , 5.1726535  ]}



);
 
$("#test-button").click(function(){
$('#map_canvas').gmap3({action: 'setStyledMap', id: 'style1'});
});




})





