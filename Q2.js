// I use Binary search sorted algorithm because this algorithm time complexity O(log n), this time complexity less than other sorted algorithm such as linear search algorithm, bubbler short algorithm, insertion short algorithm, quick short algorithm and marge short algorithm

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

let arr = [-1, 11, 12, 13, 24, 25, 36, 47, 48, 59];

console.log(binarySearch(arr, 25)); //5 number index is targeted value;

// time complexity is O(log n)
