function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 10,
  });
  directionsDisplay.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsDisplay);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var waypts = [];
  var checkboxArray = ["100台灣台北市中正區思源街1號","台北市木柵河濱公園",{lat:24.987219,lng:121.5513024},{lat:24.9767774,lng:121.5558803},"道南河濱公園"];
  for (var i = 0; i < checkboxArray.length; i++) {
      waypts.push({
        location: checkboxArray[i],
        stopover: false
      });
  }
  console.log(waypts);
  directionsService.route({
    origin: "捷運公館站",
    destination: {lat:24.999185, lng: 121.578845},
    waypoints: waypts,
    optimizeWaypoints: false,
    travelMode: google.maps.TravelMode.WALKING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      var route = response.routes[0];
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}