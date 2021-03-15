$("a").click(
    function (){
        ClickEnterBehaviour();
    }
);

$("a").mouseenter(
    function (){
        ClickEnterBehaviour();
    }
);

function ClickEnterBehaviour(){

    if ( $(this).next().hasClass("dropdown_active") ) {
        $(".dropdown").removeClass("dropdown_active");
        $(this).next().removeClass("dropdown_active");
    }
    else {
        $(".dropdown").removeClass("dropdown_active");
        $(this).next().addClass("dropdown_active");
    }
}


