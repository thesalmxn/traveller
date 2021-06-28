var priceData = document.getElementById('money');
var price = localStorage.getItem('totalPrice');

var fname = document.getElementById('fname');
var email = document.getElementById('email');
var adr = document.getElementById('adr');
var city = document.getElementById('city');
var state = document.getElementById('state');
var zip = document.getElementById('zip');


if(price == null){
    price = 0;
}
priceData.innerHTML = '<h4 style="font-size:22px; font-weight:600;padding-left:10px;padding-top:5px"> Rs '+ price + '</h4>';

function validate(){
    if(fname.value.trim() == '' || email.value.trim() == '' || adr.value.trim() == '' || city.value.trim() == '' || state.value.trim() == '' || zip.value.trim() == '' ){
        alert("Empty values are not allowed. ");
        return false;
    }
}