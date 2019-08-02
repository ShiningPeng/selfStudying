function quick_sort(arr){
  if(arr.length<=1) return arr;
  var left = [], right = [], baseDot = Math.round(arr.length/2),base = arr.splice(baseDot,1)[0];
  for(let i = 0; i< arr.length;i++){
    if(arr[i]<base){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quick_sort(left).concat([base],quick_sort(right));
}
console.log(quick_sort([2,1,8,3,6,4,9,5,7]));
