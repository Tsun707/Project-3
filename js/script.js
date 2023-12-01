 function initMap(){
  let map;

async function initMap() {
  const position = { lat: 43.85756120394474, lng: -18.41114065957382 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");


  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Sarajevo",
  });
}

initMap();

}

google.maps.event.addDomListener(window, 'load', initMap);
