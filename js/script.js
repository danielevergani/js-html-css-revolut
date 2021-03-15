$(function(){

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

    $("a").click( ClickEnterBehaviour );

    $("a").mouseenter( ClickEnterBehaviour );

    $(".dropdown").mouseover(
        function(){
            $(this).prev().addClass("black_color");
        }
    )

    $(".dropdown").mouseleave(
        function(){
            $(".dropdown").removeClass("dropdown_active");
            $(this).prev().removeClass("black_color");
        }
    )

    

    //   $(document).click(
    //       function(event){
    //           console.log(event);
    //       }
    //   );
 });





