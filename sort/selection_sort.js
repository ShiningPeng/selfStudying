function selection_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (j = i; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    var temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
console.log(selection_sort([2,1,8,3,6,4,9,5,7]));