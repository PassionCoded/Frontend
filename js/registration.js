$(document).ready(function() {
    $("#register").click(function() {
        var userInfo = {
            "user": {
                "email": $("#email").val(),
                "password": $("#password").val(),
                "password_confirmation": $("#cpassword").val()
            }
        };
        if (name == '' || email == '' || password == '' || cpassword == '') {
        alert("Please fill all fields...!!!!!!");
        } else if ((password.length) < 8) {
        alert("Password should atleast 8 character in length...!!!!!!");
        } else if (!(password).match(cpassword)) {
        alert("Your passwords don't match. Try again?");
        } else {
            $.ajax({
                type: 'POST',
                url: 'https://projectmypassion-api.herokuapp.com/reg_user',
                dataType: 'json',
                data: userInfo,
                success: function(response){
                    console.log(response);
                },
                error: function(error){
                    console.log(error);
                }
            });
        }
    });
});
