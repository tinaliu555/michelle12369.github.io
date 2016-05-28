var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        // center: { lat: -34.397, lng: 150.644 },
        zoom: 11,
        // mapTypeId: google.maps.MapTypeId.TERRAIN
    });
    geocoder = new google.maps.Geocoder();
    geocodeAddress(geocoder, map);


    // var flightPlanCoordinates = [

    //   {lat: 37.772, lng: -122.214},
    //   {lat: 21.291, lng: -157.821},
    //   {lat: -18.142, lng: 178.431},
    //   {lat: -27.467, lng: 153.027}
    // ];

    // var flightPath = new google.maps.Polyline({
    //   path: flightPlanCoordinates,
    //   geodesic: true,
    //   strokeColor: '#FF0000',
    //   strokeOpacity: 1.0,
    //   strokeWeight: 2
    // });

    // flightPath.setMap(map);
}

var location1 = ["捷運公館站", "台北市羅斯福路四段44巷", "台北市水叮州路三段","台北市自來水園區","台北新店自行車道","台北市文山區道南橋","台北市政治大學","台北市文山區動物園"];


function geocodeAddress(geocoder, resultsMap) {
    var locationCor = [];
    for (var i = 0; i < location1.length; i++) {
        var address = location1[i];
        // console.log(address);
        geocoder.geocode({ 'address': address }, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                resultsMap.setCenter(results[0].geometry.location);

                console.log(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });

                locationCor.push(results[0].geometry.location);
                
                var bikePath = new google.maps.Polyline({
                    path: locationCor,
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });
                bikePath.setMap(resultsMap);
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
 
}


