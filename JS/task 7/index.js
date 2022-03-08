function myFunction(){
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let city = document.getElementById("city");
    let hobbies1 = document.getElementById("gaming");
    let hobbies2 = document.getElementById("cricket");
    let hobbies3 = document.getElementById("football");
    let hobbies = "";    
    let valid_phone = /^[6-9]\d{9}/;
    let valid_name = /^[a-zA-Z ]{2,30}$/;
    let valid_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let error = "";
    if(name.value==""){
        document.getElementById('err_name').classList.remove("hide");
        error = "Name field is empty";
        document.getElementById('err_name').innerHTML = error;

        return false;
    }
    if(valid_name.test(name.value)==false){
        document.getElementById('err_name').classList.remove("hide");
        error = "Enter valid name";
        document.getElementById("err_name").innerHTML = error;
    }
    if(age.value==""||age.value<18){
        document.getElementById('err_age').classList.remove("hide");
        error = "Age should be 18 or greater";
        document.getElementById('err_age').innerHTML = error;
        return false;
    }
    if(email.value==""){
        document.getElementById('err_email').classList.remove("hide");
        error = "Email field is empty";
        document.getElementById('err_email').innerHTML = error;
        return false;
    }
    if(valid_email.test(email.value)==false){
        document.getElementById('err_email').classList.remove("hide");
        error = "Enter valid email";
        document.getElementById("err_email").innerHTML = error;
        return false;
    }
    if(valid_phone.test(phone.value)==false||phone.value.length<10){
        document.getElementById('err_phone').classList.remove("hide");
        error = "Enter valid phone number";
        document.getElementById('err_phone').innerHTML = error;
        return false;
    }
    if(phone.value==""||phone.value.length>10){
        document.getElementById('err_phone').classList.remove("hide");
        error = "Phone number should be of length 10";
        document.getElementById('err_phone').innerHTML = error;
        return false;
    }
    if(hobbies1.checked==false&&hobbies2.checked==false&&hobbies3.checked==false){
        document.getElementById('err_hobbies').classList.remove("hide");
        error ="Please check hobbies";
        document.getElementById('err_hobbies').innerHTML = error;
        return false;
    }
    if(hobbies1.checked){
        hobbies += hobbies1+" ";
    }
    if(hobbies2.checked){
        hobbies += hobbies2+" ";
    }
    if(hobbies3.checked){
        hobbies += hobbies3+" ";
    }
    confirm("do you want to submit");
    
}

function clear_msg(){
    let array= document.getElementsByClassName("error");
    for(let i=0;i<array.length;i++){
        array[i].classList.add("hide");
    }  
}
