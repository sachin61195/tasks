let friends = [
    {
       name:"Sachin",
       age: 25,
       isBestFriend: true,
       favouriteColors : ['red','green','yellow','blue'],
       yellowFavourite : function()
       {   
          return this.favouriteColors.includes('yellow');
       }
    },
    {
        name:"John",
        age: 28,
        isBestFriend: false,
        favouriteColors : ['red','green','violet','blue'],
        yellowFavourite : function()
        {   
           return this.favouriteColors.includes('yellow');
        }  
     },
     {
       name:"Anna",
       age: 30,
       isBestFriend: true,
       favouriteColors : ['red','green','violet','blue','pink'],
       yellowFavourite : function()
       {   
          return this.favouriteColors.includes('yellow');
       } 
    },
    {
        name:"Joe",
        age: 27,
        isBestFriend: false,
        favouriteColors : ['red','green','yellow','blue'],
        yellowFavourite : function()
        {   
           return this.favouriteColors.includes('yellow');
        }  
     },
     {
        name:"Mandy",
        age: 26,
        isBestFriend: true,
        favouriteColors : ['red','green','pink','blue','yellow','grey'],
        yellowFavourite : function()
        {   
           return this.favouriteColors.includes('yellow');
        }  
     }
]
 
var maxColors = [];
for(i in friends){
   maxColors.push(friends[i].favouriteColors.length);
}
var maxColourHeader = Math.max(...maxColors);

let table = document.getElementById("head");
var header =`<th>Name</th><th>Age</th><th>Best Friend</th>`;

for(var i=0;i<maxColourHeader;i++){
   header +=`<th> Favourite Colour ${i+1} </th>`;
}
header += '<th>Yellow Favourite</th>';
table.innerHTML = header;
let body =document.getElementById("tbody");
var data ="";
friends.forEach(element => {
   data += `<tr><td>${element.name}</td><td>${element.age}</td><td>${element.isBestFriend}</td>`;
   for(var i=0;i<maxColourHeader;i++){
      if(element.favouriteColors[i]==undefined){
         data += `<td></td>`;   
      }
      else
      data += `<td>${element.favouriteColors[i]}</td>`;
   }
   data +=`<td>${element.yellowFavourite()}</td>`;
   data += '</tr>';
   body.innerHTML=data;
});
console.log(data);



