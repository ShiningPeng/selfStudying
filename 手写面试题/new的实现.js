function _new(){
  let obj = {}
  const [construcotr,...args] = [...arguments]
  obj.__proto__ = construcotr.prototype;
  let ret = construcotr.apply(obj,args)
  if( ret && typeof ret === 'function' || typeof ret === 'object'){
    return ret
  }
    return obj;
}