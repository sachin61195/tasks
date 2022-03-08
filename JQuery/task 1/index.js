$('button').click(function(){
    let input = $('#input').val();
    if(input=="")
        alert("Input field is empty");
    else
    {   let list = document.createElement("li");
        list.textContent = input;
        $("#list").append(list);
        $('#input').val("");
    }
    
});
$('#list').on('click','li',function(e){  
        e.target.remove();
});