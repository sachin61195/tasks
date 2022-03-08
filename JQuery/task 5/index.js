let movie_array = [];
let id_cnt=1;
$('#form1').hide();
$('#thead').hide();
$('#tbody').hide();
$('#delete_movie').hide();
$("#searchbar").hide();
$(document).ready(function () {
    $('#form1').hide();
    $('#thead').hide();
    $('#tbody').hide();
    $('#delete_movie').hide();
    $("#searchbar").hide();
    //start ajax request
    $.ajax({
        url: 'https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json',
        type: 'GET',
        success: function (data) {
            var json = $.parseJSON(data);
            for (i = 0; i < json.length; i++) {

                movie_array[i] = {
                    sno: i + 1,
                    title: json[i].title,
                    duration: json[i].duration,
                    year: json[i].year,
                    posterurl: json[i].posterurl,
                    imdbRating: json[i].imdbRating
                };
            }
        }
    });
});

let clicked = 0;

function displayMovies() {
    $('#form1').hide();
    $('#thead').show();
    $('#tbody').show()
    $('#delete_movie').hide();
    clicked += 1;
    if(clicked == 1){
    movie_array.forEach(ele => {
        var movie = '';
        movie += `<tr id='${id_cnt}'>`;
        movie += '<td>' + id_cnt + '</td>';
        movie += '<td>' + ele.title + '</td>';
        movie += '<td>' + ele.duration + '</td>';
        movie += '<td>' + ele.year + '</td>';
        movie += '<td>' + `<img src="${ele.posterurl}" width="150px" height="150px" >`+'</td>';
        movie += '<td>' + ele.imdbRating + '</td>';
        movie += '</tr>';
        $('#tbody').last().append(movie);
        id_cnt+=1;
    });
    }
}

$('#add_movie').click(function(){
    $('#form1').show();
    $('#thead').hide();
    $('#tbody').hide();
    $("#delete_movie").hide();
    $("#searchbar").hide();
});

const form = document.querySelector('#form1');
form.addEventListener('submit', event => {
    event.preventDefault();
    let title = $("#title").val();
    let duration = $("#duration").val();
    let year = $("#year").val();
    let poster = document.getElementById("poster").files[0].name;
    poster = 'movies/'+poster;
    let imdb = $("#imdb").val();
    
    console.log(title, duration, year, poster, imdb);
    var a = {
        "sno": movie_array.length + 1,
        "title": title,
        "duration": duration,
        "year": year,
        "posterurl": poster,
        "imdbRating": imdb
    };
    movie_array.push(a);
    data = `<tr id='${id_cnt}'><td>${id_cnt}</td><td>${title}</td><td>${duration}</td>
    <td>${year}</td><td><img src="${poster}" width="150px" height="150px" ></td><td>${imdb}</td></tr>`;
    $('#tbody').append(data);
    id_cnt += 1;
    $('#form1').hide();
    $("#delete_movie").hide();
    $("#searchbar").hide();
    $('#thead').show();
    $('#tbody').show();
    console.log(movie_array);
});

$("#deleteMovies").click(function(){
    $("#form1").hide();
    $("#searchbar").hide();
    $('#thead').show();
    $('#tbody').show();
    $("#delete_movie").show();
   
});

function deleteMovies() {
    let sno = $('#selected_movie').val();
    let tr=$("#tbody tr");
   
    let flag = false;
    for(let i=0;i<tr.length;i++){
        if(sno === tr[i].id){  //searching element by id
            movie_array.splice(movie_array.indexOf(movie_array.find( e =>{return e.sno == sno;})),1);         
            tr[i].remove();
            flag=true;
        }
    }
    console.log(movie_array);
    if(flag==false){
        alert("Movie not found");
    }
}

$("#searchMovies").click(function(){
    $("#searchbar").show();
    $("#delete_movie").hide();
    $('#thead').hide();
    $('#tbody').hide();
});

function search(){
    let title = $('#searchtitle').val();
    let year = $('#searchyear').val();
    if(title||year){
        $('#thead').css({"display":""});
        $("#tbody").css({"display":""}); 
    }
    let tr = $('#tbody tr');
    for(let k=0;k<tr.length;k++){
        var searchtitle = $(tr[k]).find("td:eq(1)").text().toLowerCase();//getting the table title cell of row
        var searchyear = $(tr[k]).find("td:eq(3)").text();//getting the table year cell of row
        if((searchtitle.indexOf(title)>-1) && searchyear.indexOf(year)>-1)
        {
          $(tr[k]).css({"display":""});
        }
        else{
          $(tr[k]).css({"display":"none"});
        } 
    }
} 