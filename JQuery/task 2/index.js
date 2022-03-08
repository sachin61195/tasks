$("#password").change(function(){
    $(this).prop("checked") ?  $("#upassword").attr("type", "text") : $("#upassword").attr("type","password");    
});