var products = {
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
        ],
    "mobile": [
        {
            id: 6,
            name: "Motorola IG-5467",
            imageSrc: "images/motorola.jpg",
            price: 600
        },
        {
            id: 5,
            name: "Samsung GT-1980",
            imageSrc: "images/samsung.jpeg",
            price: 500
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
            for(j in products[i]) {
                let item = document.createElement('div');
                item.classList.add("product");
                item.classList.add(i);
                data = `<div><h4>${products[i][j].name}</h4></div>
                <img src="${products[i][j].imageSrc}" width="100px" height="100px">
                <div>
                <p class ="price" >${products[i][j].price} Rs</p>
                </div>`;
                item.innerHTML = data;
                all_type_products.append(item) 
            }        
    }
    displayPrice();
}
display();

let clicked =0;
function show_products(type){
    if(product_cart[type]==false){
        clicked += 1; 
        document.getElementById(type).style.backgroundColor = "pink";
        product_cart[type]=true;
        if(clicked==1){ //if clicked once hide all other category of product
            $(".product").not(`.${type}`).hide();    
        }
        $(".product").filter(`.${type}`).show();
        displayPrice();
    }else{
        clicked -= 1;
        document.getElementById(type).style.backgroundColor = "rgb(38, 38, 54)";
        product_cart[type]=false;
        for(i in product_cart){
            console.log(i);//checking the category of items clicked
            if(product_cart[i]==false){
                $(".product").filter(`.${i}`).hide();
            }
        }
        displayPrice();
    }
    if(clicked==0){ //if no category is selected then display all element
        display();
    }
}
function displayPrice(){
    total_price =0;
   let x = $('.product :visible >p.price');//selecting all the element with display visible
   for(j=0;j<x.length;j++){
       total_price += +x[j].innerHTML.split(" ")[0];
   }
   $('#total').html(total_price)
}