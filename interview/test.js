// function getIndex(arr, target) {
//   for(let i = 0; i < arr.length - 1; i++){
//     for(let j = i+1;j < arr.length-1 ;j++){
//       if(arr[i] + arr[j]== target){
//         console.log([i,j]);
//       }
//     }
//   }
// }

// getIndex([2,4,5,3,6,8],8);



//两数组求公共部分
// function getCommonNum(arr1, arr2){
//   let commonNum = [];
//   for(let i = 0;i<arr1.length-1;i++){
//     for(let j=0;j<arr2.length-1;j++){
//       if(arr1[i] == arr2[j]){
//         commonNum.push(arr1[i]);
//       }
//     }
//   }
//   console.log(new Set([...commonNum]));
// }

// getCommonNum([1,2,4,5,6],[2,5,4,7,9]);

//排好序的数组 2，5，6，9  ||  1，2，3，29
// 合并并排序
// function arrHeBing(arr1,arr2){
//   // console.log((arr1.concat(arr2)).sort((a,b) => a-b)) 
//   let newArr = [];
//   length = arr1.length > arr2.length ? arr1.length : arr2.length;
//   if(arr1.length >= arr2.length){
//     for(let i=0;i< length-1;i++){
//       if(arr1[i]>=arr2[j]){
        
//       }
//   }
//   }
  
//   console.log(newArr);
// }
// arrHeBing([2,5,6,9],[1,2,3,29]);