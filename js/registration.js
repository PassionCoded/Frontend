$(document).ready(function() {
    $("#register").click(function() {
        var password = $("#password").val()
        var cpassword = $("#cpassword").val()
        var userInfo = {
            "user": {
                "email": $("#email").val(),
                "password": $("#password").val(),
                "password_confirmation": $("#cpassword").val()
            }
        };
        if (email == '' || password == '' || cpassword == '') {
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
                    $("#form1").hide();
                    $("#form2").show();
                    console.log(response)
                },
                error: function(error){
                    console.log(error);
                }
            });
        }
    });

    $("#passionSubmit").click(function() {
        var passionInfo= {
            "passions": [
                { "name": $("#passion1").val() },
                { "name": $("#passion2").val() },
                { "name": $("#passion3").val() },
                { "name": $("#passion4").val() },
                { "name": $("#passion5").val() }
            ]
        };
        $.ajax({
            type: 'POST',
            url: 'https://projectmypassion-api.herokuapp.com/passions',
            dataType: 'json',
            data: passionInfo,
            success: function(response){
                $("#form2").hide();
                $("#response").show();
            },
            beforeSend: function(xhr, settings) {
                xhr.setRequestHeader('Authorization','Bearer ' + auth_token);
            },
            error: function(error){
                console.log(error);
            }
        });
    });
});
