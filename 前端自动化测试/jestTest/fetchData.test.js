/*
 * @Author: your name
 * @Date: 2021-01-05 15:18:23
 * @LastEditTime: 2021-01-16 16:19:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \self_study\前端自动化测试\jestTest\fetchData.test.js
 */

import { fetchData, fetchTwoData, fetchThreeData} from "./fetchData";

test("fetchData方法测试", (done) => {
  // done用于异步请求，拿到值之后才算测试完成
  fetchData((data) => {
    expect(data).toEqual({ success: true });
    done();
  });
});

test("fetchTwoData 测试", async () => {
  // 这里需要return
  const response = await fetchTwoData();
  expect(response.data).toEqual({
    success: true,
  });
});


test("fetchThreeData 测试", () => {
  expect.assertions(1) //断言，必须执行一次expect
  return fetchThreeData().catch((e) => {
    // console.log('e',e.toString());
    expect(e.toString().indexOf('404') > -1).toBe(true);
  })
});


test("fetchFourData 测试", async () => {
  await expect(fetchTwoData()).resolves.toMatchObject({
    data:{success:true}
  })
});