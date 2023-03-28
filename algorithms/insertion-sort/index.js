/*

Algorithm: Insertion Sort Algorithm
Time Complexity: O(n * n)

*/

function insertionSort(nums) {
    for(let i = 1; i < nums.length; i++) {
        let key = i;
        for(let j=i-1; j>=0; j--) {
            if(nums[j] > nums[key]) {
                let temp = nums[j];
                nums[j] = nums[key];
                nums[key] = temp;
            }
            key = j;
        }
    }
    return nums;
}

console.log(insertionSort([9, 0, -8, 54, 32, 10]))
 