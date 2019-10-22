var username = document.getElementById("username");
var usernameMsg = document.getElementById("usernameMsg");
var flag = false;
username.addEventListener("blur", function () {
    var name = username.value;
    if (name.length >= 3 && name.length <= 6)
    {        
        usernameMsg.innerText = "用户名输入正确！";
        usernameMsg.classList.add("rightMsg");
        flag = true;
    }
    else {
        usernameMsg.innerText = "用户名必须在3到6个字符之间！";
        usernameMsg.classList.remove("rightMsg");
        flag = false;       
    }
           
});