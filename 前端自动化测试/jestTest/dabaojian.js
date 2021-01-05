export function baojian1(money) {
  return money >= 200 ? "至尊享受" : "基本按摩";
}

export function baojian2(money) {
  return money >= 1000 ? "双人服务" : "单人服务";
}
module.exports = {
  baojian1,
  baojian2,
};

// 单元测试：单个模块测试

// 集成测试: 多个模块组装在一起进行测试
