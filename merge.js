function merge(arr1, arr2) {
    let sortedArr = [];
    while(arr1.length && arr2.length) {
        (arr1[0] > arr2[0]) ? sortedArr.push(arr2.shift()) : sortedArr.push(arr1.shift());
    }
    return sortedArr;
};

function mergeSort() {}

module.exports = { merge, mergeSort};