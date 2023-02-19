const arr = [-10, -20, -15, 2];
let n = arr.length;

function maxProdThree(arr, n) {
  // Sort the array in ascending order
  arr.sort();

  // Return the maximum of product of last three
  // elements and product of first two elements
  // and last element
  return Math.max(
    arr[0] * arr[1] * arr[n - 1],
    arr[n - 1] * arr[n - 2] * arr[n - 3]
  );
}

let sorted = maxProdThree(arr, n);

console.log(sorted);

// Time Complexity: O(n)
// Auxiliary Space: O(1)
