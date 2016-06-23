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
          zoom: 20,
      });
      directionsDisplay.setMap(map);

      calculateAndDisplayRoute(directionsService, directionsDisplay);

      //markers(map);

  }

  function search(sort) {
      var spots = firebase.database().ref("route9/" + sort);
      spots.on("value", function(snap) {
          var data = snap.val();
          console.log(data);
          for (var d in data) {
              //console.log(typeof data[d].lat);
              markers(data[d].lat, data[d].long, data[d].word, d, sort);
          }
      });
  }

  var spot1 = [];
  var food1 = [];
  var repair1 = [];
  var rest1 = [];
  var barrier1 = [];

  function markers(lat1, long1, word, key, sort) {
      //marker
      storageRef.child('images/route9/' + sort + '/' + key + ".png").getDownloadURL().then(function(url) {
          switch (sort) {
              case "spot":
                  var marker = new google.maps.Marker({
                      position: { lat: lat1, lng: long1 },
                      map: map,
                      title: 'Hello World!',
                      icon: '../img/map-icons-05.png'
                  });
                  break;
              case "food":
                  var marker = new google.maps.Marker({
                      position: { lat: lat1, lng: long1 },
                      map: map,
                      title: 'Hello World!',
                      icon: '../img/map-icons-03.png'

                  });
                  break;
              case "rest":
                  var marker = new google.maps.Marker({
                      position: { lat: lat1, lng: long1 },
                      map: map,
                      title: 'Hello World!',
                      icon: '../img/map-icons-02.png'

                  });
                  break;
              case "repair":
                  var marker = new google.maps.Marker({
                      position: { lat: lat1, lng: long1 },
                      map: map,
                      title: 'Hello World!',
                      icon: '../img/map-icons-01.png'

                  });
                  break;
              case "barrier":
                  var marker = new google.maps.Marker({
                      position: { lat: lat1, lng: long1 },
                      map: map,
                      title: 'Hello World!',
                      icon: '../img/map-icons-04.png'

                  });
                  break;
              default:
                  console.log("error marker!");
                  break;
          }
          var infowindow = new google.maps.InfoWindow({
              content: '<p>' + word + '</p>' + '<img src=' + url + ' width="50px" class="test"  data-toggle="modal" data-target="#myModal">'
          });
          marker.addListener('click', function() {
              infowindow.open(map, marker);
          });


          google.maps.event.addDomListener(infowindow, 'domready', function() {

              $(".test").click(function() {
                  // $('#myModal').modal('show');
                  $(".test").attr("width","150px");
              });
          })
          // google.maps.event.addDomListener(infowindow,'closeclick',function(){

          //   $(".test").attr("width","50px");
          // });

          var here;
          eval('here=' + sort + 1);
          here.push(marker);
      }).catch(function(error) {
          console.log(error);
          // Handle any errors
      });
  }

  function setNullMarkers(sort) {
      // console.log(manyMarkers);
      var here;
      eval('here=' + sort + 1);
      for (var i = 0; i < here.length; i++) {
          here[i].setMap(null);
      }
      eval(sort + 1 + '=[]');
      //console.log("here"+here);
  }

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      var waypts = [];
      var checkboxArray = [{ lat:25.1316148, lng:121.5116243 }, { lat:25.1317831, lng: 121.5055864},{ lat:25.1381238, lng: 121.5098482}, { lat: 25.1381318, lng:121.5125253}, { lat: 25.136449, lng:121.5040424}];
      for (var i = 0; i < checkboxArray.length; i++) {
          waypts.push({
              location: checkboxArray[i],
              stopover: false
          });
      }
      // console.log(waypts);
      directionsService.route({
          origin: { lat:25.0640458, lng:121.4605074},
          destination: { lat:25.0640458, lng: 121.4605074},
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
