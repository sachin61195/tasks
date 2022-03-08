const products = [
    {   id: 1,
        name: "Classic Shirt",
        imageSrc: "images/shirt1.jpg",
        price: 500,
        quantity: 1
    },
    {   id: 2,
        name: "Formal Shirt",
        imageSrc: "images/shirt2.jpg",
        price: 600,
        quantity: 1
    },
    {   id: 3,
        name: "Vintage Shirt",
        imageSrc: "images/shirt3.jpeg",
        price: 700,
        quantity: 1
    },
    {   id: 4,
        name: "T Shirt",
        imageSrc: "images/tshirt1.jpg",
        price: 1000,
        quantity: 1
    }
];
var cart_array = [];
let total_price = 0;
var i =0;
var shopping_items = document.getElementById('shopping');
products.forEach(element => {
    const item = document.createElement("div");
    data = `<div><h1>${element.name}</h1></div>
    <img src="${element.imageSrc}" width="300px" height="250px">
    <div class="price">
    <p>${element.price} Rupees</p>
    <input type="button" onclick="addItemToCart(${element.id})" value="ADD TO CART">
    </div>`;
    item.innerHTML = data;
    shopping_items.appendChild(item);    
});

function addItemToCart(id){
    let item = products.find( e =>{
        return e.id == id;
    });
    if(cart_array.includes(item)){
        alert("Item already in cart!!");
        return;
    }else{
        cart_array.push(item);
    }
    // console.log(cart_array);
    display(item);
    
}

function deleteItem(id){
    cart_array = cart_array.filter(e=>{
           return e.id != id;
       });
    if(cart_array.length==0){
        document.getElementById("thead").classList.add("hide");
        document.getElementById("tfoot").classList.add("hide");
        document.getElementById('row'+id).remove();
    }else{
       document.getElementById('row'+id).remove();
    }
    totalPrice();
}

function display(item){
    head = document.getElementById("thead");
    head.classList.remove("hide");
    tbody = document.getElementById("tbody"); 
    const row = document.createElement('tr');
    row.id = "row"+item.id;
    var data1 = "",data2 = "";
    data1 = `<td>${item.name}</td>
    <td> <img src="${item.imageSrc}" width="200px" height="150px"></td>
    <td><input type="number" id="cart${item.id}" value="1" min="1" oninput = "displayPrice(${item.id},${item.price})"></td>
    <td>${item.price}</td>
    <td id="item${item.id}" class = "totalprice hide" onchange = "totalPrice(${item.id})">${item.price}</td>
    <td><i class="fa fa-trash-o" onclick="deleteItem(${item.id})" style="font-size:48px;color:red"></i></td>`;
    row.innerHTML = data1;
    tbody.appendChild(row); 
    foot = document.getElementById("tfoot");
    foot.classList.remove("hide");
    data2 = `<tr><td>Total Price</td>
    <td rowspan=2 id="total"></td><td><input type="button" value="Pay Now" onclick="payNow()" class="pay"></td><td></td><td></td></tr>`;
    foot.innerHTML = data2;
    totalPrice();
}

function displayPrice(id,price){
    let q = document.getElementById(`cart${id}`);
    q = Math.abs(q.value);
    document.getElementById(`item${id}`).innerHTML = q*price;

    totalPrice();
}

function totalPrice(){
    let price = document.getElementsByClassName('totalprice');
    total_price = 0;
    for(let j=0;j<price.length;j++){
        total_price += +price[j].innerHTML;
    }
    document.getElementById('total').innerHTML = total_price;
}

function payNow(){
    alert("Thanks for the payment");
    cart_array.forEach(element => {
        document.getElementById("row"+element.id).remove();
    });
    cart_array = [];
    document.getElementById("thead").classList.add("hide");
    document.getElementById("tfoot").classList.add("hide");
}