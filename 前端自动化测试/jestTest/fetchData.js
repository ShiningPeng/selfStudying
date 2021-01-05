/*
 * @Author: your name
 * @Date: 2021-01-05 15:13:38
 * @LastEditTime: 2021-01-05 15:45:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \self_study\前端自动化测试\jestTest\fetchData.js
 */

//  axios

import axios from "axios";

export const fetchData = (fn) => {
  axios.get("http://a.jspang.com/jestTest.json").then((res) => {
    fn(res.data);
  });
};

export const fetchData1 = () => {
  return axios.get("http://a.jspang.com/jestTest.json");
};
