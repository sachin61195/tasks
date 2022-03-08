$('li').eq(-4).css("background-color", "red");//selects the fourth last li item
$('li').first().text("this is first li item").css("background-color","pink");//changing the text of first li item
$('li').last().text("this is last li item").css("background-color","yellow");
$('li').slice(2,4).text("changed text using slice filter").css("background-color","green");
$(".outer").has("span").css("color","red");//changes color of div having class outer and has span
$('li').filter('.a').text("text changed using filter method");
$('li').filter(function(e){
    return e%3==0;//select all the class with 
}).css("background-color","black");
$('li').not('.a').text("text changed using not filter");
$('li').not(function(e){
    return e%3==0;
}).css("background-color","yellow");