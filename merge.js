// function merge(arr1, arr2) { // modifies the original array inputs
//     let sortedArr = [];
//     while(arr1.length && arr2.length) {
//         (arr1[0] > arr2[0]) ? sortedArr.push(arr2.shift()) : sortedArr.push(arr1.shift());
//     }
//     return sortedArr;
// };
// does not modify the original array inputs
function merge(arr1, arr2) {
    let sortedArr = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) { 
        if(arr1[i] < arr2[j]) {
            sortedArr.push(arr1[i]);
            i++;
        } else {
            sortedArr.push(arr2[j]);
            j++;
        };
    };
    while(i < arr1.length) {
        sortedArr.push(arr1[i]);
        i++;
    };
    while(j < arr2.length) {
        sortedArr.push(arr2[j]);
        j++;
    };
    return sortedArr;
};

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);
}

module.exports = { merge, mergeSort};