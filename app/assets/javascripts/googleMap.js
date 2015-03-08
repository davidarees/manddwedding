var churchLocation = new google.maps.LatLng(51.51872,-0.085729);
var receptionLocation = new google.maps.LatLng(51.511231,-0.091136)
function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    
    var mapOptions = {
      center: churchLocation,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
//    var church = new createMarker(churchLocation, map, "Church");
//    var reception = new createMarker(receptionLocation, map, "Reception");

    var request = {
      origin: churchLocation,
      destination: receptionLocation,
      travelMode: google.maps.TravelMode.WALKING
    }
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    directionsService.route(request, function(response, status){
      if(status == google.maps.DirectionsStatus.OK){
        directionsDisplay.setDirections(response);
        // clear the directions panel
        $('#directions-panel').html();
        //set up the new directions within the directions panel based on the directionDisplay set above.
        directionsDisplay.setPanel(document.getElementById('directions-panel'))
      }else{
        alert('Something went wrong');
      }
    });
}

//function createMarker(loc, map, title){
//  marker = new google.maps.Marker({
//    position: loc,
//    map: map,
//    title: title
//  });
//}

google.maps.event.addDomListener(window, 'load', initialize);

