function myfun(){
    const fname="Sachin";
    const lname="Kumar";
    document.getElementById("fname").innerHTML = fname;
    let name = `${fname} ${lname}`;
    let letters= name.length;
    let subtotal = letters*5 ;
    let shipping = 7;
    let grandtotal = subtotal+shipping;
    document.getElementById("name").innerHTML = fname+" "+lname;
    document.getElementById("letter").innerHTML = letters;
    document.getElementById("subtotal").innerHTML = "$"+subtotal;
    document.getElementById("shipping").innerHTML = "$"+shipping;
    document.getElementById("grandtotal").innerHTML = "$"+grandtotal;
}
myfun();