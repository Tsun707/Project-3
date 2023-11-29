 function initMap(){
let map;

async function initMap() {
  const position = { lat: 43.85756120394474, lng: 18.41114065957382 };
  const { Map } = await google.maps.importLibrary("maps");


  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });
  window.addEventListener('load', init);