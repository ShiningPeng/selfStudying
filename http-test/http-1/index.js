const http = require('http');
http.request('http://wufazhuce.com', function (error, response, body) {
  console.log(response.statusCode)
  if (!error && response.statusCode == 200) {
    console.log(body) // 打印google首页
  }else{
    console.log(error);
  }
})