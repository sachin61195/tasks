const hotel = {
    name: "Taj Hotel",
    roomRate: 1000,
    discount: 15,
    discountRate: function(roomRate,discount){
        return this.roomRate-(this.roomRate*this.discount/100);
    }
}

var currentDate = new Date();
const offer_expires=new Date(currentDate.setDate(currentDate.getDate() + 7));
var day = offer_expires.toString().split(" ");
var expireday = day[0]+"day";
var month = offer_expires.toLocaleString('default', { month: 'long' });
var expiredate = `${day[2]} ${month} ${offer_expires.getFullYear()}`;

document.getElementById("name").innerHTML = hotel.name;
document.getElementById("roomRate").innerHTML = hotel.roomRate.toFixed(2);
document.getElementById("discountedRate").innerHTML = hotel.discountRate();
document.getElementById("day").innerHTML = expireday;
document.getElementById("date").innerHTML = expiredate;
