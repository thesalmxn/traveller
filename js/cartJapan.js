var cart = [];

function validateNumber (number) {
				
    if(isNaN(number) || (number == '')){
        alert("Enter Valid Number.")
    }
   
    else{
        const visit={
                 country:" Japan",
                 cost:" 17500/person",
                 persons:number,
                 discount : (number * 17500)*0.1 + ' (10%)',
                 costForTotalPersons : (number * 17500) - (number * 17500)*0.1,
                //  totalCost: (costForTotalPersons - (costForTotalPersons*(10*0.01))),
         }
        cart.push(visit);
        console.log(cart);
        localStorage.setItem("countryJ","Japan");
        localStorage.setItem("costJ",visit.cost);
        localStorage.setItem("personsJ",visit.persons);
        localStorage.setItem("discountJ",visit.discount);
        localStorage.setItem("costForTotalPersonsJ",visit.costForTotalPersons);
   
    }
 
}




var CustomPrompt = new function(){

    this.dialogInputEl = document.getElementById('dialogInputEl');

    this.show = function(msg, callback){
        var dlg = document.getElementById('dialogCont');
        dlg.style.top = '25%';
        dlg.style.opacity = 1;
        var dlgMessage = dlg.querySelector('#dlgMessage');
        dlgMessage.textContent = msg;
        dialogInputEl.focus();
        dialogInputEl.value = '';
        this.callback = callback;
        document.getElementById('freezeLayer').style.display = '';
      
    };

    this.okay = function () {
        this.callback(dialogInputEl.value);   
        this.close();
        CustomPrompt1.show('Items');
    }

    this.cancel = function  () {
        this.callback(null);
        this.close();
    }

    this.close = function  () {
        var dlg = document.getElementById('dialogCont');
        dlg.style.top = '-30%';
        dlg.style.opacity = 0;
        document.getElementById('freezeLayer').style.display = 'none';
    }
}




var CustomPrompt1 = new function(){

    // this.dialogInputEl1 = document.getElementById('dialogInputEl1');
    this.cartDataList  = document .getElementById('cartDataList');

    this.show = function(){
        let strD = '<ul style="list-style:none">';
        if(cart.length == 0){
                 strD = "<h3 style='color:#525250 ;margin-left:10px' >No item added yet.</h3>"
        }else{
            var cartIem;
       
             for(cartIem of cart){
                console.log(cartIem);
                for(i in cartIem){
                     strD += '<li style=" margin-left:25px ; color:#525250">' +  '<span style="margin-right:10px; text-transform:capitalize;">' + i + '</span>' + '  :  ' + '<span style="margin-left:10px;">' + cartIem[i] + '</span>'  +'</li>';
                }
             }
            strD += '</ul>';
        }
        this.cartDataList.innerHTML = strD;

        var dlg1 = document.getElementById('dialogCont1');
        dlg1.style.top = '55%';
        dlg1.style.opacity = 1; 
        // this.dialogInputEl1.focus();
        // this.dialogInputEl1.value = '';
        document.getElementById('freezeLayer').style.display = '';
  
        
    };

    this.okay = function () {
        this.close();
    }


    this.close = function  () {
        var dlg1 = document.getElementById('dialogCont1');
        dlg1.style.top = '-30%';
        dlg1.style.opacity = 0;
        document.getElementById('freezeLayer').style.display = 'none';
    }
}

