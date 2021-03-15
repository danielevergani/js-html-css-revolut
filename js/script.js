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
    
    var a = 12;

    $("a").click( ClickEnterBehaviour );

    $("a").mouseenter( ClickEnterBehaviour );

    $(".dropdown").mouseleave(
        function(){
            $(".dropdown").removeClass("dropdown_active");
        }
    )

      $(document).click(
          function(event){
              console.log(event);
          }
      );
 });





