$(document).ready(function () {
  let myArr=[];
  let count=1;
  let id_count=1;
  let a=0;
  let k=0
  $("#show").click(function () { 
    $("table").removeClass("hide");
    $("form").addClass("hide");
    $("input-value").text("");
    $("#input1-value1").text("");
    $(".div-item").addClass("hide");

  if(a==0){
    $.ajax({
      type: "GET",
      url: "https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json",
      success: function (response) 
      {
        myArr=JSON.parse(response);
       let header=`<tr><th>S.No</th><th>Title</th><th>Duration</th><th>Year</th><th>Poster</th><th>Imd Rating</th></tr>`;
       let data_set=header;
      
        for(let key in myArr)
        {
          data_set +=`<tr id="${id_count++}"><td>${count++}</td>
          <td>${myArr[key].title}</td>
          <td>${convert(myArr[key].duration)}</td>
          <td>${myArr[key].year}</td>
          <td><img src="${myArr[key].posterurl}" alt="imges"></td>
          <td>${myArr[key].imdbRating}</td> </tr>`;

        }
        document.getElementById("table").innerHTML=data_set;
       
      }
      
    });
  }
  a++
});


function convert(timec)
{
  let timed=+timec.substr(2,3);
  let  hours = Math.floor(timed / 60);          
  let minutes = timed % 60;
  return `${hours} hour ${minutes} minutes`;
}

$("#add").click(function (e) { 
  $(".div-item").addClass("hide");
  $("form").removeClass("hide");
  $("table").addClass("hide");
   
 });

 $("#save").click(function (e) { 
  let title=$("#title").val();
  let duration=$("#duration").val();
  let year=$("#year").val();
  let rating=$("#rating").val();
  let file=($("#poster").val().replace("C:\\fakepath\\",""));
  let data_value=`<td>${count++}</td><td>${title}</td><td>${duration}</td><td>${year}</td><td><img src="images/${file}" alt="erfghj"></td><td>${rating}</td><`;
   $("table").append(data_value);
   $("table").removeClass("hide");
   $("form").addClass("hide");
   $("form")[0].reset();
});

$("#search").click(function(e){
  $("#div2").removeClass("hide");
  $("#div1").addClass("hide");
  $("form").addClass("hide");
  
  $("table").removeClass("hide");
});
$(".input-data").on('input', function (e) 
{
  let data=(e.target.value).toUpperCase();
 console.log(e.target.id);
  let tr=$("#table tr");
  
  if(e.target.value=="")
  {
    $("#table").css({"display":""});
  }
   for(let k=0;k<tr.length;k++)
   {
    var col1=$(tr[k]).find("td:eq(1)").text().toUpperCase();
    var col2=$(tr[k]).find("td:eq(3)").text();
     if((col1.indexOf(data)>-1) && col2.indexOf(data)>-1)
     {
      $(tr[k]).css({"display":""});
     }
     else if(col1.indexOf(data)>-1 || col2.indexOf(data)>-1 )
     $(tr[k]).css({"display":""});
     else{
       $(tr[k]).css({"display":"none"});
     }
    
   }
});

$("#delete").click(function(e)
{ 
    $("#div1").removeClass("hide");
    $("#div2").addClass("hide");
    $("#table").removeClass("hide");  
});

$("#delete_data").click(function(e){
  let id1=+$("#del").val();
  let tr=$("#table tr");
  let status=false;
   for(let i=1;i<tr.length;i++)
   {
      if(id1===+tr[i].id)
      {
       tr[i].remove();
       status=true
      }
   }
   if(status==false)
   alert("This Id does not exits");
  
 });

});

