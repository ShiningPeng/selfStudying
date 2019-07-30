const superagent = require('superagent');
const fs = require('fs');
const cheerio = require('cheerio');

const local = 'jiangxi/qingshanhu-district'
const weatherUrl = `https://tianqi.moji.com/weather/china/${local}`;
const getWeatherTpis = function () {
  return new Promise((resolve, reject) => {
    superagent.get(weatherUrl).end((err, res) => {
      if (err) {
        reject(err);
      }
      const $ = cheerio.load(res.text);
      const $weatherTip = $('.wea_tips');
      // 查找 xx 元素下面的节点
      const weatherTip = $weatherTip.find('em').text();
      let threeDaysData = [];
      $('.forecast .days').each((index, dayNode) => {
        const $singleDay = $(dayNode).find('li');
        const day = $singleDay.eq(0).text().trim();
        const weatherText = $singleDay.eq(1).text().trim();
        const temperature = $singleDay.eq(2).text().trim();
        threeDaysData.push({
          day, weatherText, temperature
        })
      })
      let todayWeather = [];
      todayWeather.push({
        day: $('.forecast .days')[0].find('li').eq(0).text().trim(),
        weather: $('.forecast .days')[0].find('li').eq(1).text().trim(),
        temperature: $('.forecast .days')[0].find('li').eq(2).text().trim()
      })

      resolve({ weatherTip, threeDaysData, todayWeather });
      // console.log(weatherTip, threeDaysData);
      console.log(todayWeather);
    })
  })
};
const getOneData = function () {
  return new Promise((resolve, reject) => {
    superagent.get('http://wufazhuce.com/')
      .end((err, res) => {
        if (err) {
          reject(err);
        }
        let $ = cheerio.load(res.text);
        // console.log('res.text:', res);
        let selectItem = $("#carousel-one .carousel-inner .item");
        let allData = [];
        selectItem.each(e => {
          // console.log(e);
          allData.push({
            type: $(selectItem[e])
              .find(".fp-one-imagen-footer")
              .text()
              .replace(/\s/g, ''),
            text: $(selectItem[e])
              .find(".fp-one-cita")
              .text()
              .replace(/\s/g, '')
          })
        })
        let todayOne = selectItem[0];
        let todayOneData = {
          type: $(todayOne)
            .find(".fp-one-imagen-footer")
            .text()
            .replace(/\s/g, ''),
          text: $(todayOne)
            .find(".fp-one-cita")
            .text()
            .replace(/\s/g, '')
        };
        resolve(todayOneData, allData);
        // console.log('---today',todayOneData);
        console.log('------allData', allData);
      })
  })
}
// const getTodayArticleTitle = function () {
//   return new Promise((resolve, reject) => {
//     superagent.get('http://wufazhuce.com/')
//       .end((err, res) => {
//         if (err) {
//           reject(err);
//         }
//         let $ = cheerio.load(res.text);
//         //res.text是整个网页的html结构
//         console.log('res.text:', res.text);
//         // let $ = cheerio.html(res);
//         // console.log('cheerio.html:',$);
//         // cheerio.load
//         //获取文章标题
//         let todayArticleTitle = $("#main-container .fp-one-atriculo .corriente");
//         // console.log(todayArticleTitle);
//         let articleTitle = {
//           xuhao: $(todayArticleTitle[0])
//             .find(".one-titulo"),
//           // .text().replace(/\s/g, ''),
//           articleName: $(todayArticleTitle[0]).find(".one-articulo-titulo")
//         };
//         resolve(articleTitle);
//         // console.log('articleTitle:',articleTitle);
//       })
//   })
// };
const getArticle = function () {
  return new Promise((resolve, reject) => {
    superagent.get('http://wufazhuce.com/article/3928').end((err, res) => {
      if (err) {
        reject(err);
      }
      let $ = cheerio.load(res.text);
      let oneArticle = $('#main-container .one-articulo');
      //获取开头句子
      let startSentence = oneArticle.find('.comilla-cerrar').text().trim();
      // console.log('startSentence',startSentence);
      //获取文章标题
      let articleTitle = oneArticle.find('.articulo-titulo').text().trim();
      //获取文章作者
      let articleAuthor = oneArticle.find('.articulo-autor').text().trim();
      //获取文章的内容
      let articleContent = oneArticle.find('.articulo-contenido').text().trim();
      // console.log(articleContent);
      let article = {
        startSentence, articleTitle, articleAuthor, articleContent
      }
      // let articleCon = [];
      // articleContent.each((e) => {
      //   // console.log(e,pNode);
      //   articleCon.push({
      //     content:$(articleContent[e]).find('p').text()
      //   })
      // })
      resolve(article);
      console.log('article:---',article);
    })
  })
}
// getTodayArticleTitle();
// getWeatherTpis();
// getOneData();
getArticle();
