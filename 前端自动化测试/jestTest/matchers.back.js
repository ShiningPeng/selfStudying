/*
 * @Author: your name
 * @Date: 2021-01-05 14:15:18
 * @LastEditTime: 2021-01-05 14:53:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \self_study\前端自动化测试\jestTest\matchers.test.js
 */
/*
 * @Author: your name
 * @Date: 2021-01-05 14:15:18
 * @LastEditTime: 2021-01-05 14:49:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \self_study\前端自动化测试\jestTest\matchers.test.js
 */

// test("测试007号技师的匹配", () => {
//   // toBe相当于 ===,绝对匹配
//   const a = { number: "007" };

//   expect(a).toBe({ number: "007" });
// });

test("toEqual匹配器", () => {
  const a = { number: "007" };
  expect(a).toEqual({ number: "007" });
});

test("toBeNull匹配器", () => {
  const a = null;
  expect(a).toBeNull();
});

test("toBeUndefined匹配器", () => {
  // 匹配未定义
  const a = undefined;
  expect(a).toBeUndefined();
});

test("toBeDefined匹配器", () => {
  // 已定义
  const a = 1;
  expect(a).toBeDefined();
});

test("toBeTruthy匹配器", () => {
  // true匹配
  const a = 1;
  expect(a).toBeTruthy();
});

test("toBefalsy匹配器", () => {
  // false匹配
  const a = 0;
  expect(a).toBeFalsy();
});

test("toBeGreaterThan匹配器", () => {
  // 大于号
  const count = 20;
  expect(count).toBeGreaterThan(10);
});

test("toBeLessThan匹配器", () => {
  // 小于号
  const count = 20;
  expect(count).toBeLessThan(100);
});

test("toBeGreaterThanOrEqual匹配器", () => {
  // 大于等于
  const count = 100;
  expect(count).toBeGreaterThanOrEqual(100);
});

test("toBeCloseTo匹配器", () => {
  // 解决浮点数的相等问题，这里使用toBeEqual不能通过，因为计算的结果是0.30000000004
  const p1 = 0.1;
  const p2 = 0.2;
  expect(p1 + p2).toBeCloseTo(0.3);
});

test("toMatch匹配器", () => {
  // 匹配字符串
  const str = "谢大脚，刘英，小红";
  expect(str).toMatch("谢大脚");
  // expect(str).toMatch("刘能");
});

const throwNewErrorFunc = () => {
  // throw new Error("this is an error");
};

// not相当于取反
test("toThrow匹配器", () => {
  expect(throwNewErrorFunc).not.toThrow();
});
