function insertionSort(arr) {debugger;
    for (let i = 1; i < arr.length; i++) {
        let currVal = arr[i]; // used to compare to left
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currVal; j--) {
          arr[j + 1] = arr[j]; // assign left side to right side
        }
        arr[j + 1] = currVal; // assign to current value
      }
      return arr;
}

module.exports = insertionSort;