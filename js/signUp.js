var captchaPro = document.getElementById('captchaComm');
var captchaList = ['Cvsow56', "Vwkw3D4", 'aK84Ert', 'M3dK4fm', 'dww3EEL', "2m3mKew", "Dkek332", "3keme32", "Ekd333s", "334DDff"];

var k = Math.floor(Math.random() * 10);

captchaPro.innerHTML = '<h4 style="font-size:22px;padding-left:10px">' + captchaList[k] + '</h4>'
function validate() {

        var firstName = document.getElementById("fname");
        var lastName = document.getElementById("lname");
        var mobile = document.getElementById("mob");
        var mail = document.getElementById("mail");
        var pwd = document.getElementById("pwd");

        var rePwd = document.getElementById("repwd");
        var captcha = document.getElementById("captcha");
        var male = document.getElementById("male");
        var female = document.getElementById("female");
        var others = document.getElementById("others");
        var cap = document.getElementById("captchaComm");

        // if(length(pwd.value) < 8){
        //     alert("Password length should be atleast 8 letters ." );
        //     return false;
        // }
        if (firstName.value.trim() == "" || lastName.value.trim() == "" || mobile.value.trim() == "" || mail.value.trim() == "" || pwd.value.trim() == "" || rePwd.value.trim() == "" || captcha.value.trim() == "" || male.value.trim() == "" || female.value.trim() == "" || others.value.trim() == "") {
                alert("No blank values are allowed");
                return false;
        }
        if (captchaList[k] != captcha.value) {
                alert("Enter captcha correctly.");
                return false;
        }
        if (pwd.value.length < 8) {
                alert("Password length should be atleast 8 characters.")
                return false;
        }
        if (pwd.value != rePwd.value) {
                alert("Password and Re Entered Password should be same.");
                return false;
        }


}