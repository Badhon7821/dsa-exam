let arr1 = [2, 3, 4, 5, 6, 1];
let arr2 = [4, 5, 4, 5, 1, 2];

function coherence(arr1, arr2) {
  let i = 0,
    j = 0,
    k = 0,
    arr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      i++;
      j++;
    }
    arr[k++] = arr1[i++];
    arr[k++] = arr2[j++];
  }

  while (arr1.length < arr2.length) {
    arr[k++] = arr2[j++];
  }
  while (arr1.length > arr2.length) {
    arr[k++] = arr1[i++];
  }

  return bubbleSort(arr);
}

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(coherence(arr1, arr2));

// time complexity O(n^2)
// space complexity O(1)
