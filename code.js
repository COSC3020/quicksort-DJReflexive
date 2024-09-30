
function quicksort(array) {
    let len = array.length;

    if (len == 0) { return array; }

    // Stack to hold the start and end of the L & R "subarrays"
    let indexStack = [];
    indexStack.push(0);
    indexStack.push(len-1);

    while (indexStack.length > 0) {
        let high = indexStack.pop();
        let low = indexStack.pop();

        let pivotIndex; 
        let pivot = array[high]; // Choose last element for pivot
        let i = low-1; // Index of low side

        for (let j = low; j < high; j++) {
            if (array[j] < pivot) {
               i++;

                swap(array, i, j)
            }
        }
        
        swap(array, i+1, high);

        pivotIndex = i+1;

        // Push left subarray indices to the stack
        if (pivotIndex - 1 > low) {
            indexStack.push(low);
            indexStack.push(pivotIndex - 1);
        }

        // Push right subarray indices to the stack
        if (pivotIndex + 1 < high) {
            indexStack.push(pivotIndex + 1);
            indexStack.push(high);
        }
    }

    return array;
}



function swap(arr, i, j) {
    let tmp = arr[i];

    arr[i] = arr[j];
    arr[j] = tmp;
}
