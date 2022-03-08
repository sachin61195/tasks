let list = document.getElementById("list");
let li = document.querySelectorAll("#list li");
for(var i=0;i<li.length;i++){
    li[i].classList.add("food");
}

var button1 = document.getElementById("btn1"),count=0;
button1.onclick = function(){
    count+=1;
    if(count==1){
        let list = document.getElementById("list");
        let item = document.createElement("li");
        item.classList.add("food");
        let data = "Air Freshener";
        item.innerHTML = data;
        list.appendChild(item);
    }
}

var button2 = document.getElementById("btn2");
button2.onclick = function(){
    let list = document.getElementById("list");
    if(list.lastElementChild)
    {
        list.removeChild(list.lastElementChild);
    }
}