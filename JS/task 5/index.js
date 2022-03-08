function myfunc(){
    var text = document.getElementById("text").value;
    if(text==""){
        text="User";
    }
    document.getElementById("input_text").innerHTML = text;
}