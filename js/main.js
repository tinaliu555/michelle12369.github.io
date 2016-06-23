var config = {
    apiKey: "AIzaSyB9Wquww0XfGMMlca9zIm9XsJp5qjdQUZU",
    authDomain: "bike-map-d24d4.firebaseapp.com",
    databaseURL: "https://bike-map-d24d4.firebaseio.com",
    storageBucket: "bike-map-d24d4.appspot.com",
};

var f2 = firebase.initializeApp(config, "Secondary");
//get current place location
var path=window.location.pathname.split("/")[0].split(".")[0];
console.log(path);
var storageRef = f2.storage().ref();
var clicks = [true, true, true, true, true];
$(".classification").on("click", function() {
    var i = getClickStatus($(this));
    //console.log(i);
    var iframeFun = document.getElementById('embeded').contentWindow;
    if (clicks[i] === true) {
        clicks[i] = false;
        $(this).html("<span class='glyphicon glyphicon-ok' aria-hidden='true'></span>" + $(this).text());

        switch (i) {
            case 0:
                iframeFun.search("spot");
                break;
            case 1:
                iframeFun.search("food");
                break;
            case 2:
                iframeFun.search("rest");
                break;
            case 3:
                iframeFun.search("repair");
                break;
            case 4:
                iframeFun.search("barrier");
                break;
            default:
                break;
        }
    } else {
        clicks[i] = true;
        $(this).html($(this).text());
        switch (i) {
            case 0:
                iframeFun.setNullMarkers("spot");
                break;
            case 1:
                iframeFun.setNullMarkers("food");
                break;
            case 2:
                iframeFun.setNullMarkers("rest");
                break;
            case 3:
                iframeFun.setNullMarkers("repair");
                break;
            case 4:
                iframeFun.setNullMarkers("barrier");
                break;
            default:
                break;
        }
    }
});

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
};

function getClickStatus(element) {
    var ids = ["spot", "food", "rest", "repair", "Barrier"];
    for (i = 0; i < ids.length; i++) {
        if (ids[i] === element.context.id) {
            return i;
        }
    }
};
/*for footer javascript*/
var IsReportDisplay = false;
$("#down-pic").on("click", function() {
    if (!IsReportDisplay) {
        $("footer").css("background-color", "transparent");
        $("#report").slideToggle("slow");
        IsReportDisplay = true;
    } else {
        $("#report").slideUp("slow");
        IsReportDisplay = false;
    }
});
var report_clicks = [false, false, false, false, false];
$(".report_classification").on("click", function() {
    var i = getClickStatus($(this));
    if (report_clicks[i] === true) {
        report_clicks[i] = false;
        $(this).html($(this).text());
    } else {
        report_clicks[i] = true;
        $(this).html("<span class='glyphicon glyphicon-ok' aria-hidden='true'></span>" + $(this).text());
        //console.log($(this).text()+" "+report_clicks);
    }
});
var nowPos;
$("#getPos").click(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            nowPos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log(nowPos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
});

$("#send").on("click", function(e) {
    e.preventDefault();
    $("footer").css("background-color", "transparent");
    $("#report").slideToggle("slow");
    IsReportDisplay = true;

    var select = -1;
    for (var i = 0; i < report_clicks.length; i++) {
        if (report_clicks[i] == true) {
            console.log(i);
            select = i;
            break;
        }
    }

    var picFile = $("#picData")[0].files[0];
    var input = $("#typeinfo").val();
    //console.log(select+" "+input+" "+picFile);
    if (select == -1 || picFile == undefined) {
        console.log("Haven't select picture or button!");
        return;
    } else if (input == "") {
        console.log("Haven't write down the discripition!");
        return;
    }
    switch (select) {
        case 0:
            var data = f2.database().ref(path+"/spot").push({ "lat": nowPos.lat, "long": nowPos.lng, "word": input });
            uploadImg(picFile, "spot", data.key);
            break;
        case 1:
            var data = f2.database().ref(path+"/food").push({ "lat": nowPos.lat, "long": nowPos.lng, "word": input });
            uploadImg(picFile, "food", data.key);
            break;
        case 2:
            var data = f2.database().ref(path+"/rest").push({ "lat": nowPos.lat, "long": nowPos.lng, "word": input });
            uploadImg(picFile, "rest", data.key);
            break;
        case 3:
            var data = f2.database().ref(path+"/repair").push({ "lat": nowPos.lat, "long": nowPos.lng, "word": input });
            uploadImg(picFile, "repair", data.key);
            break;
        case 4:
            var data = f2.database().ref(path+"/barrier").push({ "lat": nowPos.lat, "long": nowPos.lng, "word": input });
            uploadImg(picFile, "barrier", data.key);
            break;
        default:
            break;
    }

});

function uploadImg(picFile, sort, key) {
    var uploadTask = storageRef.child('images/'+path+'/' + sort + "/" + key + ".png").put(picFile);
    uploadTask.on('state_changed', function(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
    }, function(error) {
        console.log(error);
    }, function() {

    });
    //恢復預設值
    $("#picData").val("");
    $("#typeinfo").attr("placeholder", "在此輸入簡介").val("").focus().blur();
    $(".report_classification").each(function(index) {
        report_clicks[index] = false;
        //console.log( index + ": " + $( this ).text() );
        $(this).html($(this).text());
    });
}

$('#myModal').on('show.bs.modal', function() {
    $('.all').addClass('blur');
})

$('#myModal').on('hide.bs.modal', function() {
    $('.all').removeClass('blur');
})

$('#myModal2').on('show.bs.modal', function() {
    $('.all').addClass('blur');
})

$('#myModal2').on('hide.bs.modal', function() {
    $('.all').removeClass('blur');
})
