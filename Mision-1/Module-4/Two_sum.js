const twoSum = (arr, target) => {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const crr = target - arr[i];
        if (map.has(crr)) {
            return [map.get(crr), i];
        }
        map.set(arr[i], i);
    }
    return [];
};

console.log(twoSum([2, 7, 5, 6, 10], 9));
