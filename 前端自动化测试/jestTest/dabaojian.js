/*
 * @Author: your name
 * @Date: 2020-12-31 10:30:44
 * @LastEditTime: 2020-12-31 11:45:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \self_study\前端自动化测试\jestTest\dabaojian.js
 */

function baojian1(money) {
  return money >= 200 ? "至尊享受" : "基本按摩";
}

function baojian2(money) {
  return money >= 1000 ? "双人服务" : "单人服务";
}
module.exports = {
  baojian1,
  baojian2,
};
// 单元测试：单个模块测试

// 集成测试: 多个模块组装在一起进行测试
