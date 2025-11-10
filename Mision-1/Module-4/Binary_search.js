const binarySearch = (arr, target) => {
    let l = 0, r = arr.length - 1;

    while (l <= r) {
        let mid = Math.floor((r + l) / 2);
        if (arr[mid] === target) 
        {
            return mid;
        } 
        else if (arr[mid] > target) 
        {
            r = mid - 1;
        } 
        else {
            l = mid + 1;
        }
    }
    return -1;
};

console.log(binarySearch([3, 5, 6, 8, 9, 10], 8));
