const superagent = require('superagent');
const fs = require('fs');
const cheerio = require('cheerio');

const getPhotography = function () {
  return new Promise((resolve, reject) => {
    superagent.get('http://wufazhuce.com').end((err, res) => {
      if (err) {
        reject(err);
      }
      let $ = cheerio.load(res.text);
      // console.log(res);
      let photographyDom = $('#main-container #carousel-one ');
      let imgUrl = photographyDom.find('.fp-one-imagen-footer').text().replace(/\s/g, ''); //fp-one-imagen
      // console.log('oneQuestion',oneQuestion);
      // fs.writeFile('./data/onePhoto.json', JSON.stringify(question), function (err, res) {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     console.log('question写入成功');
      //   }
      // })
      console.log(imgUrl);
      resolve(imgUrl);
    })
  })
}
getPhotography();