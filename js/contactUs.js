var uname = document.getElementById('uname');
var yname = document.getElementById('yname');
var emailAdd = document.getElementById('emailAdd');
var mobNum = document.getElementById('mobNum');
var msg = document.getElementById('msg');


var CustomPrompt = new function(){
    
    this.cartDataList  = document .getElementById('cartDataList');
    
    let strD;
    this.show = function(){
      
        if(uname.value.trim() == '' || yname.value.trim() == '' ||emailAdd.value.trim() == '' ||mobNum.value.trim() == '' ||msg.value.trim() == '' )
        {
           
            strD = "<h4 style='color:#504e4e; margin-top:10px;font-size:15px'>No blank values are allowed</h4>"
            
        }else{
            strD = "<h5  style='color:#4c4f4f;margin-top:10px;font-size:15px'>We will send response to  <span style='margin:0px 5px;color:#38484a;border-bottom:2px solid #2ce9ba;fon-size:20px;'>" + emailAdd.value + "</span>  as early as possible. </h5>"
        }
        this.cartDataList.innerHTML = strD;
        
       
        var dlg1 = document.getElementById('dialogCont1');
        dlg1.style.top = '25%';
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