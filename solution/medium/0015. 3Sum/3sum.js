/**
 * When solving this type of problem, it's essential to first sort the array. 
 * We can then define a variable 'i', initialized to 0, to iterate through the 
 * 'nums' array until it reaches the third from the last position. After that, 
 * we can apply the two-pointer approach to find the other two elements. Since 
 * returning duplicate triplets is not allowed, we must move to different 
 * elements when a triplet is found. By repeating this process, we can find the 
 * solution.
 * @param {number[]} nums
 * @return {number[][]}
 */
export const threeSum = function(nums) {
    if( nums.length < 3 ) {
        return [];
    }

    let ret = [];
    nums.sort((a, b) => a - b);
    for( let i = 0; i < nums.length; i++ ) {
        if( nums[i] > 0 ) {
            break;
        }
        if( i > 0 && nums[i] === nums[i - 1] ) {
            continue;
        }
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if( sum === 0 ) {
                ret.push([nums[i], nums[l], nums[r]]);
                while (nums[l] === nums[l+1]) {
                    l++;
                }
                while (nums[r] === nums[r-1]) {
                    r--;
                }
                l++; r--;
            } else if( sum > 0 ) {
                r--;
            } else if( sum < 0 ) {
                l++;
            }
        }
    }

    return ret;
};