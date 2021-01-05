/*
 * @Author: your name
 * @Date: 2021-01-05 15:18:23
 * @LastEditTime: 2021-01-05 18:00:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \self_study\前端自动化测试\jestTest\fetchData.test.js
 */

import { fetchData, fetchData1 } from "./fetchData";

test("fetchData方法测试", (done) => {
  // done用于异步请求，拿到值之后才算测试完成
  fetchData((data) => {
    expect(data).toEqual({ success: true });
    done();
  });
});

test("fetchData1 测试", async () => {
  // 这里需要return
  const response = await fetchData1();
  expect(response.data).toEqual({
    success: true,
  });
});
