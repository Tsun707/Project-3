 function initMap(){
	  let sarajevo = {lat:43.858551426878236, lng:18.412856928904617};
	  let map = new google.maps.Map(
	  document.getElementById('map'),{zoom: 4, center: sarajevo}
	  );
	}
  
  <script defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">