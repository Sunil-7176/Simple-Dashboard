
$(document).ready(function(){


    $('$mobile').on('focusout',function(){

        if($('#mobile').val()!="9980122937"){

            if(validatemobile($('#mobile').val())){

            }else{
                $('.wrong');
                $('.wrong').fadein("slow");
            }

        }else{
            $('.wrong');
            $('.wrong').fadein("slow");
        }


    });



});

function validatemobile(emob){
    var val = "9980122937";

    if(val.test(emob)){
        return true;
    }else{
        return false;
    }
}