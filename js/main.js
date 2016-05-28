 var clicks = [true, true, true, true];
    $(".classification").on("click", function() {
        var i = getClickStatus($(this));
        if (clicks[i] === true) {
            clicks[i] = false;
            $(this).html("<span class='glyphicon glyphicon-ok' aria-hidden='true'></span>"+$(this).text() );
            
        } else {
            clicks[i] = true;
            $(this).html($(this).text());
        }
    });

    function getClickStatus(element) {
        var ids = ["spot", "food", "rest", "repair"];
        for (i = 0; i < ids.length; i++) {
            if (ids[i] === element.context.id) {
                return i;
            }
        }
    }