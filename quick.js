/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (array, i, j) => {
      [array[i], array[j]] = [array[j], array[i]];
    };
  
    let pivotValue = arr[start];
    let pivotIndex = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivotValue) {
        pivotIndex++;
        swap(arr, pivotIndex, i);
      }
    }
  
    swap(arr, start, pivotIndex);
    return pivotIndex;
  }
  

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  

module.exports = {quickSort, pivot};