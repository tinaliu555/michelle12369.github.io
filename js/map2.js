  var config = {
      apiKey: "AIzaSyB9Wquww0XfGMMlca9zIm9XsJp5qjdQUZU",
      authDomain: "bike-map-d24d4.firebaseapp.com",
      databaseURL: "https://bike-map-d24d4.firebaseio.com",
      storageBucket: "bike-map-d24d4.appspot.com",
  };
  firebase.initializeApp(config);
  var storageRef = firebase.storage().ref();

  var map;

  function initMap() {
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      map = new google.maps.Map(document.getElementById('map_canvas'), {
          zoom: 10,
      });
      directionsDisplay.setMap(map);

      calculateAndDisplayRoute(directionsService, directionsDisplay);

      //markers(map);

  }

  function search(sort) {
      var spots = firebase.database().ref("route1/" + sort);
      spots.on("value", function(snap) {
          var data = snap.val();
          console.log(data);
          for (var d in data) {
              //console.log(typeof data[d].lat);
              markers(data[d].lat, data[d].long, data[d].word, d, sort);
          }
      });
  }

var spot1=[];
var food1=[];
var repair1=[];
var rest1=[];
var barrier1=[];
  function markers(lat1, long1, word, key, sort) {
      //marker
      // console.log(typeof lat1);
      // console.log(lat1 + " " + long1);
      storageRef.child('images/' + sort + '/' + key + ".png").getDownloadURL().then(function(url) {
          // console.log(url);
          var marker = new google.maps.Marker({
              position: { lat: lat1, lng: long1 },
              map: map,
              title: 'Hello World!'
          });

          var infowindow = new google.maps.InfoWindow({
              content: '<p>' + word + '</p>' + '<img src=' + url + ' width="50px">'
          });
          marker.addListener('click', function() {
              infowindow.open(map, marker);
          });

          var here;
          eval('here='+sort+1);
          here.push(marker);
      }).catch(function(error) {
          console.log(error);
          // Handle any errors
      });
  }

  function setNullMarkers(sort) {
    // console.log(manyMarkers);
    var here;
    eval('here='+sort+1);
      for (var i = 0; i < here.length; i++) {
          here[i].setMap(null);
      }
      eval(sort+1+'=[]');
      console.log("here"+here);
  }

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      var waypts = [];
      var checkboxArray = ["100台灣台北市中正區思源街1號", "台北市木柵河濱公園", { lat: 24.987219, lng: 121.5513024 }, { lat: 24.9767774, lng: 121.5558803 }, "道南河濱公園"];
      for (var i = 0; i < checkboxArray.length; i++) {
          waypts.push({
              location: checkboxArray[i],
              stopover: false
          });
      }
      // console.log(waypts);
      directionsService.route({
          origin: "捷運公館站",
          destination: { lat: 24.999185, lng: 121.578845 },
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
