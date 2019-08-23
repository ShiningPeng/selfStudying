const superagent = require('superagent');
const fs = require('fs');
const cheerio = require('cheerio');

const getArticle = function (id) {
  return new Promise((resolve, reject) => {
    superagent.get(`http://wufazhuce.com/article/${id}`).end((err, res) => {
      if (err) {
        reject(err);
      }
      let $ = cheerio.load(res.text);
      let oneArticle = $('#main-container .one-articulo');
      let articleId = id;
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
      let articleEditor = oneArticle.find('.articulo-editor').text().trim();
      let article = {
        articleId, startSentence, articleTitle, articleAuthor, articleEditor, articleContent
      }
      resolve(article);
      // console.log('article:---',article);
      fs.writeFile('./article.json', JSON.stringify(article), function (err, res) {
        if (err) {
          console.log(err);
        } else {
          console.log('article写入成功');
        }
      })
    })
  })
}
const getOneQuestion = function (count) {
  return new Promise((resolve, reject) => {
    superagent.get(`http://wufazhuce.com/question/${count}`).end((err, res) => {
      if (err) {
        reject(err);
      }
      let $ = cheerio.load(res.text);
      // console.log(res);
      let questionDom = $('#main-container .one-cuestion');
      let question = { id: count, title: questionDom.find('h4').text().replace(/\s/g, ''), content: questionDom.find('.cuestion-contenido').text().replace(/\s/g, ''), editor: questionDom.find('.cuestion-editor').text().replace(/\s/g, '') }
      resolve(question);
      // console.log('oneQuestion',oneQuestion);
      fs.writeFile('./question.json', JSON.stringify(question), function (err, res) {
        if (err) {
          console.log(err);
        } else {
          console.log('question写入成功');
        }
      })
    })
  })
}
// getArticle(3946);
getOneQuestion(2568);
// var count = 2240;
// for (let i = count; i < count + 13; i++) {
//   // getArticle(count.stringify());
//   getOneQuestion(JSON.stringify(count));
// }