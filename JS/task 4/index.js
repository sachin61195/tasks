var products = {
    "Electronics": {
        "Television": [
            {
                "id": "PR001",
                "name": "MAX-001",
                "brand": "Samsung"
            },
            {
                "id": "PR002",
                "name": "BIG-301",
                "brand": "Bravia"
            },
            {
                "id": "PR003",
                "name": "APL-02",
                "brand": "Apple"
            }
        ],
        "Mobile": [
            {
                "id": "PR004",
                "name": "GT-1980",
                "brand": "Samsung"
            },
            {
                "id": "PR005",
                "name": "IG-5467",
                "brand": "Motorola"
            },
            {
                "id": "PR006",
                "name": "IP-8930",
                "brand": "Apple"
            }
        ]
    },
    "Jewelry": {
        "Earrings": [
            {
                "id": "PR007",
                "name": "ER-001",
                "brand": "Chopard"
            },
            {
                "id": "PR008",
                "name": "ER-002",
                "brand": "Mikimoto"
            },
            {
                "id": "PR009",
                "name": "ER-003",
                "brand": "Bvlgari"
            }
        ],
        "Necklaces": [
            {
                "id": "PR010",
                "name": "NK-001",
                "brand": "Piaget"
            },
            {
                "id": "PR011",
                "name": "NK-002",
                "brand": "Graff"
            },
            {
                "id": "PR012",
                "name": "NK-003",
                "brand": "Tiffany"
            }
        ]
    }
}




//list of products with samsung brand

var tbody2 = document.getElementById("tbody2");
var body2 = "";
for(i in products){
    for(j in products[i]){
            for(k in products[i][j]){
                if(products[i][j][k].brand =="Samsung"){
                body2 += `<tr><td>${i}</td><td>${j}</td><td>${products[i][j][k].name}</td><td>${products[i][j][k].id}</td><td>${products[i][j][k].brand}</td></tr>`;        
                }
            }
        }
    }
tbody2.innerHTML = body2;
//List of all Products
var head = document.getElementById("thead");
var header = "<th>Category</th><th>Subcategory</th><th>ID</th><th>Name</th><th>Brand</th>";
head.innerHTML = header;

var tbody = document.getElementById("tbody");
var body = "";
for(i in products){
    for(j in products[i]){
        for(k in products[i][j]){
            body += `<tr><td>${i}</td><td>${j}</td><td>${products[i][j][k].name}</td><td>${products[i][j][k].id}</td><td>${products[i][j][k].brand}</td></tr>`;        
        }
    }
}
tbody.innerHTML = body;
//List of products with mobile category
var head1 = document.getElementById("thead1");
var header1 = "<th>Category</th><th>Subcategory</th><th>ID</th><th>Name</th><th>Brand</th>";
head1.innerHTML = header1;

var tbody1 = document.getElementById("tbody1");
var body1 = "";
for(i in products){
    for(j in products[i]){
            if(j=="Mobile"){
                for(k in products[i][j]){
                body1 += `<tr><td>${i}</td><td>${j}</td><td>${products[i][j][k].name}</td><td>${products[i][j][k].id}</td><td>${products[i][j][k].brand}</td></tr>`;        
                }
            }
        }
    }
tbody1.innerHTML = body1;

//list of products with samsung brand

var tbody2 = document.getElementById("tbody2");
var body2 = "";
for(i in products){
    for(j in products[i]){
        for(k in products[i][j]){
    if (products[i][j][k].brand == "Samsung") {
        body2 += `<tr><td>Product ID</td><td>${products[i][j][k].id}</td></tr>`;
        body2 += `<tr><td>Product Name</td><td>${products[i][j][k].name}</td></tr>`;
        body2 += `<tr><td>Subcategory</td><td>${j}</td></tr>`;
        body2 += `<tr><td>Category</td><td>${i}</td></tr>`;
    }
}}}
tbody2.innerHTML = body2;

//Delete product with id = PR003
// delete products.Electronics.Television[2];
var head3 = document.getElementById("thead3");
var header3 = "<th>Category</th><th>Subcategory</th><th>ID</th><th>Name</th><th>Brand</th>";
head3.innerHTML = header3;

var tbody3 = document.getElementById("tbody3");
var body3 = "";

for(i in products){
    for(j in products[i]){
        for(k in products[i][j]){
    if (products[i][j][k].id != "PR003") {
        body3 += `<tr><td>${i}</td><td>${j}</td><td>${products[i][j][k].name}</td><td>${products[i][j][k].id}</td><td>${products[i][j][k].brand}</td></tr>`;
        }else{

        delete products[i][j][k];
    }
    }}   
}
tbody3.innerHTML = body3;

//Update product with id = PR002


var head4 = document.getElementById("thead4");
var header4 = "<th>Category</th><th>Subcategory</th><th>ID</th><th>Name</th><th>Brand</th>";
head4.innerHTML = header4;

var tbody4 = document.getElementById("tbody4");
var body4 = "";
for(i in products){
    for(j in products[i]){
        for(k in products[i][j]){
            if(products[i][j][k].id=="PR002"){
                products[i][j][k].name = "BIG-555";
            }
            body4 += `<tr><td>${i}</td><td>${j}</td><td>${products[i][j][k].name}</td><td>${products[i][j][k].id}</td><td>${products[i][j][k].brand}</td></tr>`;        
        }
    }
}
tbody4.innerHTML = body4;