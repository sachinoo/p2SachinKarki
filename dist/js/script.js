mapboxgl.accessToken = 'pk.eyJ1Ijoic2FjaGlub28iLCJhIjoiY2ttbzE3N2oxMDJuODJubm0yNWJ0OWMwOSJ9.CSkqwrDoS2KMLLOWx_L3hw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 13
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
  map.addControl(new mapboxgl.GeolocateControl({
      positionOption:{
        enableHighAccuracy: true
      },
      trackUserLocation: true
 }));

}
map.addControl(new mapboxgl.NavigationControl());
