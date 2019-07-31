const superagent = require('superagent');
const fs = require('fs');
const cheerio = require('cheerio');

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
const getOneQuestion = function(){
  return new Promise((resolve, reject) => {
    superagent.get('http://wufazhuce.com/question/2553').end((err, res) => {
      if(err){
        reject(err);
      }
      let $ = cheerio.load(res.text);
      // console.log(res);
      let question = $('#main-container .one-cuestion');
      let oneQuestion = {questionTitle:question.find('h4').text().trim(), questionContent:question.find('.cuestion-contenido').text().replace(/\s/g, ''), editor:question.find('.cuestion-editor').text().replace(/\s/g, '')}
      resolve(oneQuestion);
      console.log('oneQuestion',oneQuestion);
    })
  })
}

getArticle();
getOneQuestion();