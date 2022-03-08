function myfun(){
    navDiv = document.getElementById("navDiv");
    featureDiv = document.getElementById("featureDiv");
    headerDiv = document.getElementById("headerDiv");
    searchButton = document.getElementById("searchButton");
    if(navDiv.style.display=="block")
    {
        navDiv.style.display = "none"; 
        navDiv.removeAttribute("style");
        document.body.removeChild(navDiv);
        headerDiv.insertBefore(navDiv,searchButton);
    }
    else{
        navDiv.style.display = "block";
        navDiv.style.marginTop = "10px";
        navDiv.style.textAlign ="center";
        document.body.insertBefore(navDiv,featureDiv);
    }
} 