function pluckCommonElements(arr1, arr2) {
    const commonElements = [];
    arr1.forEach(el => {
        if(arr2.includes(el) && !commonElements.includes(el)) {
            commonElements.push(el)
        }
    })
    return commonElements;
}

function pluckCommonElements2(arr1, arr2) {
    const result = [];
    arr1 = new Set(arr1);
    arr2 = new Set(arr2);

    const map1 = new Map();
    const map2 = new Map();

    arr1.forEach(el => map1.set(el, true));
    arr2.forEach(el => map2.set(el, true));

    arr1.forEach(el => {
        if(map1.get(el) && map2.get(el)) {
            result.push(el)
        }
    });

    return result;
}

console.time()
console.log(pluckCommonElements2([4, 5, 4, 89, 87, 3, 89, 3289, 2398, 29, 289, 12, 209, 290, 74], [5, 3, 3, 4, 100]))
console.timeEnd()