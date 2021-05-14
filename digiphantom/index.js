var button_list = document.querySelectorAll('.tabContainer .buttonContainer li');
var button_content = document.querySelectorAll('.tabContainer .tabPanel');
function show(btn_index, btn_color){
    button_list.forEach((item)=>{
        item.style.background_color = "";
        item.classList.remove('activated');
    })
    button_list[btn_index].classList.add('activated');
    button_content.forEach((item)=>{
        item.style.display = "none";
    })
    button_content[btn_index].style.display = "block";
    button_content[btn_index].style.color = `${btn_color} !important`;
    //button_list[btn_index].style.text_decoration = 'underline azure 3px';
}
show(0, 'red');


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

document.querySelector('.portal').style.display = 'none';
document.getElementById('login').addEventListener('click', function() {
    document.querySelector('.portal').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.portal').style.display="none";
});

function validate(){
    var mail = document.getElementById("text").value;
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/ ;
    if(mail.match(regx)){
        alert("Congratulations you have successfully signed up for our newsletter");
        return true;
    }
    else{
        alert("Please provide a valid email-id");
        return false;
    }
}

function logging(){
    var mail = document.getElementById("signin").value;
    var password = document.getElementById("password").value;
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/ ;
    if(mail.match(regx) && password.length!=0){
        alert("Congratulations you have successfully logged in to our website");
    }
    else{
        alert("Please provide a valid email-id or a correct password");
    }
}