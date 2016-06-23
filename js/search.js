var cc;
$("#ChooseTeam1").change(function() {
    cc = $("#ChooseTeam1").val();
    $("#ChooseTeam2 option[value=" + cc + "]").attr("selected", "selected");
    $("#ChooseTeam3 option[value=" + cc + "]").attr("selected", "selected");
    $("#ChooseTeam4 option[value=" + cc + "]").attr("selected", "selected");
})
$("#ChooseTeam2").change(function() {
    cc = $("#ChooseTeam2").val();
    console.log(cc);
    $("#ChooseTeam1 option[value=" + cc + "]").attr("selected", "selected");
    $("#ChooseTeam3 option[value=" + cc + "]").attr("selected", "selected");
    $("#ChooseTeam4 option[value=" + cc + "]").attr("selected", "selected");
})
$("#ChooseTeam3").change(function() {
    cc = $("#ChooseTeam3").val();
    $("#ChooseTeam1 option[value=" + cc + "]").attr("selected", "selected");
    $("#ChooseTeam2 option[value=" + cc + "]").attr("selected", "selected");
    $("#ChooseTeam4 option[value=" + cc + "]").attr("selected", "selected");
})
$("#ChooseTeam4").change(function() {
    cc = $("#ChooseTeam4").val();
    $("#ChooseTeam1 option[value=" + cc + "]").attr("selected", "selected");
    $("#ChooseTeam2 option[value=" + cc + "]").attr("selected", "selected");
    $("#ChooseTeam3 option[value=" + cc + "]").attr("selected", "selected");
})

$(".btn2").click(function() {
	console.log(cc);
    switch (cc) {
        case "LAA":
            window.location = "/bikemap/route1.html";
            break;
        case "HOU":
            window.location = "/bikemap/route2.html";
            break;
        case "OAK":
            window.location = "/bikemap/route3.html";
            break;
        case "TOR":
            window.location = "/bikemap/route4.html";
            break;
        case "ATL":
            window.location = "/bikemap/route5.html";
            break;
        case "MIL":
            window.location = "/bikemap/route6.html";
            break;
        case "STL":
            window.location = "/bikemap/route7.html";
            break;
        case "KC":
            window.location = "/bikemap/route8.html";
            break;
        case "CHC":
            window.location = "/bikemap/route9.html";
            break;
        case "ARI":
            window.location = "/bikemap/route10.html";
            break;
        default:
            window.location = "/bikemap/route1.html";
            break;
    }

});
