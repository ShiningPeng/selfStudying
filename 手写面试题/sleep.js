// 某个时间后就去执行某个函数，使用Promise封装
function sleep(fn,delay){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn)
    }, delay);
  })
}

const sayHi = (name) =>{
  console.log(`hello,${name}`)
}
async function autoPlay() {
  // console.log(await sleep(sayHi,3000))
  // await sleep(sayHi,2000).then(res => {res('hahaah')})
  await sleep(sayHi('liyiyiyiyi'),1000)
  await sleep(sayHi('world'),1000)
  await sleep(sayHi('ssssssssss'),1000)
}
autoPlay()

// function sleep(fn, time) {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           resolve(fn);
//       }, time);
//   });
// }
// let saySomething = (name) => console.log(`hello,${name}`)
// async function autoPlay() {
//   let demo = await sleep(saySomething('TianTian'),1000)
//   let demo2 = await sleep(saySomething('李磊'),1000)
//   let demo3 = await sleep(saySomething('掘金的好友们'),1000)
// }
// autoPlay()

