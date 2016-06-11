 var clicks = [true, true, true, true, true];
 $(".classification").on("click", function() {
     var i = getClickStatus($(this));
     //console.log(i);
     if (clicks[i] === true) {
         clicks[i] = false;
         $(this).html("<span class='glyphicon glyphicon-ok' aria-hidden='true'></span>" + $(this).text());

     } else {
         clicks[i] = true;
         $(this).html($(this).text());
     }
 });

 function getClickStatus(element) {
     var ids = ["spot", "food", "rest", "repair", "Barrier"];
     for (i = 0; i < ids.length; i++) {
         if (ids[i] === element.context.id) {
             return i;
         }
     }
 }
 /*for footer javaascript*/
 var IsReportDisplay = false;
 $("#down-pic").on("click", function() {
     if (!IsReportDisplay) {
         $("footer").css("background-color", "transparent");
         $("#report").slideToggle("slow");
         IsReportDisplay = true;
     } else {
         
         // $("#report").css("display", "none");
         $("#report").slideUp("slow",function(){
            $("footer").css("background-color", "white");
         });
         
         IsReportDisplay = false;
     }
 })
 var report_clicks = [true, true, true, true, true];
 $(".report_classification").on("click", function() {
     var i = getClickStatus($(this));
     //console.log(i);
     if (report_clicks[i] === true) {
         report_clicks[i] = false;
         $(this).html("<span class='glyphicon glyphicon-ok' aria-hidden='true'></span>" + $(this).text());

     } else {
         report_clicks[i] = true;
         $(this).html($(this).text());
     }
 });
