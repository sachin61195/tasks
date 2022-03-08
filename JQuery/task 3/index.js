$("#submit").click(function(){
let fname = $("#fname").val();
let lname = $("#lname").val();
let email = $("#email").val();
let password = $("#password").val();
let cpassword = $("#conf_pass").val();
let valid_name = /^[a-zA-Z ]{2,30}$/;
let valid_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let error = "";
if(fname==""){
    $('#err_fname').removeClass("hide");
    error = "First Name field is empty";
    $('#err_fname').html(error);
    return false;
}
if(valid_name.test(fname)==false){
    $('#err_fname').removeClass("hide");
    error = "Enter valid name";
    $("#err_fname").html(error);
    return false;
}
if(lname==""){
    $('#err_lname').removeClass("hide");
    error = "Last Name field is empty";
    $('#err_lname').html(error);
    return false;
}
if(valid_name.test(lname)==false){
    $('#err_lname').removeClass("hide");
    error = "Enter valid name";
    $("#err_lname").html(error);
    return false;
}
if(email==""){
    $('#err_email').removeClass("hide");
    error = "Email field is empty";
    $('#err_email').html(error);
    return false;
}
if(valid_email.test(email)==false){
    $('#err_email').removeClass("hide");
    error = "Enter valid email";
    $("#err_email").html(error);
    return false;
}
if(password==""){
    $("#err_password").removeClass("hide");
    error = "Password field is empty";
    $("#err_password").html(error);
    return false;
}
if(password.length<6){
    $("#err_password").removeClass("hide");
    error = "Password should be atleast of 6 character";
    $("#err_password").html(error);
}
if(cpassword==""){
    $("#err_conf_pass").removeClass("hide");
    error = "Password field is empty";
    $("#err_conf_pass").html(error);
    return false;
}
if(cpassword.length<6){
    $("#err_conf_pass").removeClass("hide");
    error = "Password should be atleast of 6 character";
    $("#err_conf_pass").html(error);
    return false;
}
if(password!=cpassword){
    $("#err_conf_pass").removeClass("hide");
    error = "Password and confirm password not match";
    $("#err_conf_pass").html(error);
    return false;
}
confirm("Are you sure to submit");
});

$("input").on('input',function(){
    $(".error").each(function() {
        $(this).addClass("hide");
    });
});