$("a").click (function(){

    if ( $(this).next().hasClass("dropdown_active") ){
        $(".dropdown").removeClass("dropdown_active");
        $(this).next().removeClass("dropdown_active")
    }
    else{
        $(".dropdown").removeClass("dropdown_active");
        $(this).next().addClass("dropdown_active");
    }
});

// $("a").mouseenter (function(){
//     $(this).next().show();
// });

// $("a").mouseleave (function(){
//     $(this).next().hide();
// });


