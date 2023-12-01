let map;

 function initMap(){
	 const position = {lat:43.858551426878236, lng:18.412856928904617};
	 const{map} = await google.maps.importLibrary('maps');
	 const{AdvancedMarkerView} = await google.maps.importLibrary('maker');
	 map = new map(document.getElementById("map"),{
		 zoom: 4,
		 center: position,		 
	 });
	 
	 const marker = new AdvancedMarkerView({
		 map: map,
		 position: position,
		 title: "Sarajevo",
	 });
 }

  initMap();