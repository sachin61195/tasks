var products = {
        "clothes": [
            {
                id: 1,
                name: "Classic Shirt",
                imageSrc: "images/shirt1.jpg",
                price: 500
            },
            {
                id: 2,
                name: "Formal Shirt",
                imageSrc: "images/shirt2.jpg",
                price: 600
            },
            {
                id: 3,
                name: "Vintage Shirt",
                imageSrc: "images/shirt3.jpeg",
                price: 700
            },
            {   id: 4,
                name: "T Shirt",
                imageSrc: "images/tshirt1.jpg",
                price: 1000
            }
        ],
        "mobile": [
            {
                id: 5,
                name: "Samsung GT-1980",
                imageSrc: "images/samsung.jpeg",
                price: 500
            },
            {
                id: 6,
                name: "Motorola IG-5467",
                imageSrc: "images/motorola.jpg",
                price: 600
            },
            {
                id: 7,
                name: "Apple IP-8930",
                imageSrc: "images/apple.jpeg",
                price: 700
            },
            {   id: 8,
                name: "Nokia 5233",
                imageSrc: "images/nokia.png",
                price: 1000
            },
            {   id: 9,
                name: "Xiomi Si-1",
                imageSrc: "images/motorola.jpg",
                price: 1000
            }
        ],
        "watch": [
            {
                id: 10,
                name: "Titan",
                imageSrc: "images/titan.jpeg",
                price: 500
            },
            {
                id: 11,
                name: "Armani Exchange",
                imageSrc: "images/armani.jpg",
                price: 600
            },
            {
                id: 12,
                name: "Fossil Round",
                imageSrc: "images/fossil.png",
                price: 700
            },
            {   id: 13,
                name: "boAt Storm smart",
                imageSrc: "images/boat.png",
                price: 1000
            }
        ],
        "laptop": [
            {
                id: 15,
                name: "McBook Air",
                imageSrc: "images/macbook.jpg",
                price: 500
            },
            {
                id: 16,
                name: "HP Laptop",
                imageSrc: "images/hp.jpeg",
                price: 600
            },
            {
                id: 17,
                name: "Acer Laptop",
                imageSrc: "images/acer.jpg",
                price: 700
            }
        ],
        "shoes": [
            {
                id: 18,
                name: "Nike",
                imageSrc: "images/nike.jpeg",
                price: 500
            },
            {
                id: 19,
                name: "Addidas",
                imageSrc: "images/adidias.jpeg",
                price: 600
            }
        ]
};

let cart_array = [];
let total_price = 0;
let product_cart = {clothes:false,mobile:false,watch: false,laptop: false,shoes: false};


function display(){
let all_type_products = $("#items");
all_type_products.html("");
total_price =0;
for(i in products){
        console.log(i);
        products[i].forEach(element => {
            total_price += element.price;
            let item = document.createElement('div');
            item.class = "product";
            data = `<div><h4>${element.name}</h4></div>
            <img src="${element.imageSrc}" width="100px" height="100px">
            <div>
            <p class ="price" >${element.price} Rupees</p>
            </div>`;
            item.innerHTML = data;
            all_type_products.append(item) 
        });        
}
document.getElementById('price').innerHTML = total_price;
}
display();
function cart_display(){
    if(cart_array.length == 0){
        display();
    }else
    {  total_price = 0;
      let all_products = $("#items");
    all_products.html("");
    cart_array.forEach(element => {
        total_price += element.price;
        let item = document.createElement('div');
        item.class = "product";
        data = `<div><h4>${element.name}</h4></div>
        <img src="${element.imageSrc}" width="100px" height="100px">
        <div>
        <p class ="price">${element.price} Rupees</p>
        </div>`;
        item.innerHTML = data;
        all_products.append(item)
    });
    document.getElementById('price').innerHTML = total_price;
    }
}
function show_products(type){
    if(product_cart[type]==false){ 
        document.getElementById(type).style.backgroundColor = "pink";
        product_cart[type]=true;
    for(i in products){
        if(i==type){
            products[i].forEach(element => {
                cart_array.push(element); 
            });
        }
    }
    cart_display();
    console.log(cart_array);
    }else{
        document.getElementById(type).style.backgroundColor = "rgb(38, 38, 54)";
        product_cart[type]=false;
        console.log(product_cart[type]);
        for(i in products){
            if(i==type){
                products[i].forEach(element => {
                    cart_array = cart_array.filter(e=>{
                        return e != element;
                    });
                });
            }
        } 
        console.log(cart_array);
    cart_display();
    }

    displayPrice();
}
