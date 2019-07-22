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
      resolve({ weatherTip, threeDaysData });
      // console.log(weatherTip, threeDaysData);
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
        // for(let i = 0; i < selectItem.length;i++){
        //   allData.push({type: $(selectItem[i])
        //     .find(".fp-one-imagen-footer")
        //     .text()
        //     .replace(/\s/g, ''),
        //   text: $(selectItem[i])
        //     .find(".fp-one-cita")
        //     .text()
        //     .replace(/\s/g, '')
        // })
        // }
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
getWeatherTpis();
getOneData();
