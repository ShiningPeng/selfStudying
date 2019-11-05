function checkUserName(str) {
  //验证输入的邮件地址（用户名）是否合法
  var regular = /^[a-zA-Z]\w{5,17}$/;
  var res = regular.test(str);
  return res;
}

function checkPassword(str) {
  //判断密码是否合法
  var regular = /^\S{6,16}$/;
  var res = regular.test(str);
  return res;
}

function checkIsSamePassword(firstPassword, secondPassword) {
  //判断两次输入的密码是否一致
  console.log(firstPassword, secondPassword)
  if (firstPassword === secondPassword) {
    return true;
  } else {
    return false;
  }
}

function checkIsSameVerificationCode(inputCode, rightCode) {
  //判断输入的验证码是否和右侧随机产生的验证码一致
  console.log(inputCode, rightCode);
  if (inputCode.toLowerCase() === rightCode.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

function random_str(len = 5) {//产生随机验证码
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const maxPos = $chars.length;
  let str = '';
  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return str;
}

function checkPhoneNumber(str) {//判断手机号是否合法
  var regular = /^(\+86-1)\d{10}$/;
  var res = regular.test(str);
  return res;
}


window.onload = function () {
  //检查验证码是否一致
  var inputCode = document.getElementById('verification-code');
  inputCode.addEventListener('blur', () => {
    var verifyCodeRes = this.checkIsSameVerificationCode(inputCode.value, code.innerHTML);
    var verifyCodeText = document.getElementById('verify-tip');
    if(!verifyCodeRes){
      verifyCodeText.classList.add('re-password-wrong');
      verifyCodeText.classList.remove('re-password-right');
      verifyCodeText.innerHTML = '验证码错误';
    }else{
      verifyCodeText.classList.add('re-password-right');
      verifyCodeText.classList.remove('re-password-wrong');
      verifyCodeText.innerHTML = '验证码正确';
    }
    console.log('验证码是否一致' + verifyCodeRes);
  })

  //点击切换验证码
  var code = document.getElementById('verify-code');
  code.innerHTML = this.random_str();
  code.addEventListener('click', () => {
    var newCode = random_str();
    code.innerHTML = newCode;
  })

  //检查邮箱地址是否合法
  var address = document.getElementById('address');
  address.addEventListener('blur', () => {
    console.log(address.value)
    var addressRes = this.checkUserName(address.value);
    var addressText = document.getElementById('add-tip');
    if(!addressRes){
      addressText.classList.add('address-wrong');
      addressText.classList.remove('address-right');
      addressText.innerHTML = '邮箱6-18字符'; 
    }else{
      addressText.classList.add('address-right');
      addressText.classList.remove('address-wrong');
      addressText.innerHTML = '恭喜，该邮箱地址可以注册';
    }
    console.log('邮箱是否合法' + addressRes);
  })

  //检查密码是否合法
  var password = document.getElementById('password');
  password.addEventListener('blur', () => {
    var checkPassword = this.checkPassword(password.value);
    var passText = document.getElementById('pass-tip');
    if(!checkPassword){
      passText.classList.add('password-wrong');
      passText.classList.remove('password-right');
      passText.innerHTML = '密码不符合要求';
    }else{
      passText.classList.add('password-right');
      passText.classList.remove('password-wrong');
      passText.innerHTML = '密码符合要求';
    }
    console.log('密码：' + checkPassword);
  })

  //检查重输的密码是否一致
  var rePassword = document.getElementById('check-password');
  rePassword.addEventListener('blur', () => {
    var checkRePassword = this.checkIsSamePassword(password.value, rePassword.value)
    var rePasswordText = document.getElementById('repass-tip');
    if(!checkRePassword){
      rePasswordText.classList.add('re-password-wrong');
      rePasswordText.classList.remove('re-password-right');
      rePasswordText.innerHTML = '两次输入的密码不一致';
    }else{
      rePasswordText.classList.add('re-password-right');
      rePasswordText.classList.remove('re-password-wrong');
      rePasswordText.innerHTML = '密码一致';
    }
    console.log('重输的密码：' + checkRePassword);
  })

  //检查手机号是否合法
  var phone = document.getElementById('telephone');
  phone.addEventListener('blur', () => {
    var phoneRes = this.checkPhoneNumber(phone.value);
    
    console.log('电话是否合法' + phoneRes);
  })

  //判断是否符合提交条件
  var btn = document.getElementById('submit-btn');
  console.log(btn);
  btn.addEventListener('click', () => {
    //判断是否勾选同意按钮
    var agree = document.getElementById('agree-items');
    console.log('agree勾选:' + agree.checked);
    if(agree.checked && addressRes &&phoneRes && verifyCodeRes && checkPassword && checkRePassword){
      btn.innerHTML = '申请成功';
    }
  })
}
