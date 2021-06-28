var priceData = document.getElementById('money');

var numb = document.getElementById('numb');
var debit = document.getElementById('debit');
var credit = document.getElementById('credit');
var name1 = document.getElementById('name');
var cvv = document.getElementById('cvv');

var  price = localStorage.getItem('totalPrice');


if(price == null){
    price = 0;
}
priceData.innerHTML = '<h4 style="font-size:22px; font-weight:600;padding-left:10px;padding-top:5px"> Rs '+ price + '</h4>';

function validate(){
    if(numb.value.trim() == '' ||debit.value.trim() == '' ||credit.value.trim() == '' ||name1.value.trim() == '' ||cvv.value.trim() == ''){
        alert("Empty values are not allowed.");
        return false;
    }

    if(numb.value.length != 16){
        alert("Enter card number correctly");
        return false;
    }
    if(cvv.value.length != 3){
        alert("Enter card CVV correctly");
        return false;
    }
}
// window.onload= window.localStorage.clear();