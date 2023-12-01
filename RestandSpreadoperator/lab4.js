const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];
const combinedArray = nums1.concat(nums2);
const modifiedArray = [5, ...nums1, -6, -1, ...nums2];
const totalSum = combinedArray.reduce((sum, num) => sum + num, 0);
console.log(combinedArray);
console.log(modifiedArray);
console.log(totalSum);
