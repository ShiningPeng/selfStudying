//产生随机验证码
function random_str(len = 4 ){
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const maxPos = $chars.length;
  let str = '';
  for(let i = 0;i < len;i++){
    str += $chars.charAt(Math.floor(Math.random() * maxPos)) 
  }
  return str;
}