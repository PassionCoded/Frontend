$(document).ready(function() {
    $("#register").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var cpassword = $("#cpassword").val();
        if (name == '' || email == '' || password == '' || cpassword == '') {
        alert("Please fill all fields...!!!!!!");
        } else if ((password.length) < 8) {
        alert("Password should atleast 8 character in length...!!!!!!");
        } else if (!(password).match(cpassword)) {
        alert("Your passwords don't match. Try again?");
        } else {
            $.ajax({
                url: 'http://projectmypassion-api.herokuapp.com/reg_user',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify( { "user": {"email": $('#email').val(), "password_confirmation": $('#cpassword').val() }} ),
                processData: false,
                success: function( data, textStatus, jQxhr ){
                    $('#response pre').html( JSON.stringify( data ) );
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });
        // $.post("http://projectmypassion-api.herokuapp.com/reg_user",
        //     {
        //         name1: name,
        //         email1: email,
        //         password1: password
        //     }, function(data) {
        //     if (data == 'You have Successfully Registered.....') {
        //     $("form")[0].reset();
        //     }
        //     alert(data);
        //     });
        }
    });
});
