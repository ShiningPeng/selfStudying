//验证输入的邮件地址（用户名）是否合法
function checkUserName(str){
  var regular =  /^[a-zA-Z](\w){5, 17}$/;
  var res = regular.test(str);
  var result  = {regular, res};
  return result;
} 
//判断密码是否合法
function checkPassword(str){
  var regular = /^(\S){6,16}$/; 
  var res = regular.test(str);
  var result  = {regular, res};
  return result;
}
//判断两次输入的密码是否一致
function checkIsSamePassword(firstPassword, secondPassword){
  if(firstPassword === secondPassword){
    return true;
  }else{
    return false;
  }
}
//判断输入的验证码是否和右侧随机产生的验证码一致
function checkIsSameVerificationCode(inputCode, rightCode){
  if(inputCode === rightCode){
    return true;
  }else{
    return false;
  }
}
//产生随机验证码
function random_str(len = 5 ){
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const maxPos = $chars.length;
  let str = '';
  for(let i = 0;i < len;i++){
    str += $chars.charAt(Math.floor(Math.random() * maxPos)) 
  }
  return str;
}

// console.log(random_str())