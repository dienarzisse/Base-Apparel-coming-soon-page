$(document).ready(function() {
    function checkEmail(){
            let emailAdress = $("#emails").val();
            let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
            if(emailAdress.length > 0)
            {
                if (!emailAdress.match(regex)) 
                    {
                        $("#emails").addClass("invalid-email");
                        $("#emails").removeClass("valid-email");
    
                        $(".invalid-text").css("display", "block");
                        $(".error").css("display", "block");
    
                        $(".valid-text").css("display", "none");
                        $(".check").css("display", "none");
    
                    }
                else{
                    $("#emails").removeClass("invalid-email");
                    $("#emails").addClass("valid-email");
    
                    $(".invalid-text").css("display", "none");
                    $(".error").css("display", "none");
    
                    $(".valid-text").css("display", "block");
                    $(".check").css("display", "block");
                }
            }    
            else{
                $("#emails").removeClass("invalid-email");
                $("#emails").removeClass("valid-email");
                $(".invalid-text").css("display", "none");
                $(".valid-text").css("display", "none");
                $(".error").css("display", "none");
                $(".check").css("display", "none");
            }
    
        }
    $("#emails").keyup(checkEmail);
    $(".submit-btn").click(checkEmail);

});