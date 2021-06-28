var cartDataList = document.getElementById("cartData1");
var priceData = document.getElementById('priceBx');
 
var items = ['country','cost','persons','discount','costForTotalPersons'];
var countries = ['Paris','Dubai','Japan'];

let strD = '';
var key;
var price=0;
var presentData = 0;
var choiceNum = 1;
for(let i=0;i<countries.length;i++){
            
            for(let j=0;j<items.length;j++){
               
                    if(countries[i] != localStorage.getItem( items[0] + countries[i][0])){
                        break;
                    }
                    if(countries[i] == localStorage.getItem( items[j] + countries[i][0])){
                        strD += '<ul style="list-style:none;margin-left:10px;margin-right:10px;padding:0 5px;background:rgba(255,255,255,0.6);width:80%;">';

                        strD += '<li style="color:#fc590e; border-bottom:4px solid #b1b1ae; margin-top:20px; font-size:25px;text-align:center; font-weight:500"><span>Choice '+ (choiceNum) +'</span></li>'
                        choiceNum++;
                    }
                    key = items[j] + countries[i][0];
                    if(j == 4){
                        price += parseInt(localStorage.getItem(key));
                    }
                   
                    presentData = 1;
                    strD += '<li style="color:#4a4f61;margin-top:px;padding-left:5px">' +  '<span style="font-size:16px; text-transform:capitalize;">' + items[j] + '</span>' + '  :  ' + '<span style="font-size:20px;">' + localStorage.getItem(key) + '</span>'  +'</li>';

            }
            strD += '</ul> '
}

if(presentData==0){
    strD += "<li><h4 style='position:absolute;top:100px;left:100px;color:#333 ;font-size:40px;' >No place added yet.</h4></li>";
}

function validate(){
        if(presentData == 0){
            alert("Cart is empty!!")
            return false;
        }
}

strD += '</ul>';
cartDataList.innerHTML = strD;

localStorage.setItem("totalPrice",price);

priceData.innerHTML = '<h4 style="font-size:22px; font-weight:600;padding-left:10px"> Rs '+ price + '</h4>'

window.onload= window.localStorage.clear();
localStorage.setItem("totalPrice",price);