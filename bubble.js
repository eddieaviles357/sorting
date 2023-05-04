function bubbleSort(arr) {
    let temp;
    let swapped = false;

    for(let i = 0; i < arr.length; i++) {
        swapped = false; // no swap was done

        for(let j = 0; j < arr.length - 1; j++) {
            if(arr[ j ] > arr[ j + 1 ]) { // value is greater than next value
                temp = arr[ j ]; // store in a temp variable
                arr[ j ] = arr[ j + 1];; // swap value
                arr[ j + 1 ] = temp; // swap value
                swapped = true; // a swap was done
            }
        };
        if(!swapped) break; // no swap was done take a break
    };
    return arr;
}

module.exports = bubbleSort;