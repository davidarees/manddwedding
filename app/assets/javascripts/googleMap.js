var churchLocation = new google.maps.LatLng(51.51872,-0.085729);
function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    
    var mapOptions = {
      center: churchLocation,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
}

var marker;
function createMarker(churchLocation, map, title){
  marker = new google.maps.Marker({
    position: churchLocation,
    map: map,
    title: title
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

