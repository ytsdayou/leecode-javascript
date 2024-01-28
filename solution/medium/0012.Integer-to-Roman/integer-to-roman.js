/**
 * @param {number} num
 * @return {string}
 */
export const intToRoman = function(num) {
    let arab = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roma = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L','XL', 'X', 'IX', 'V', 'IV', 'I'];

    let ret = '', i = 0;
    while (num > 0) {
        if(num >= arab[i]) {
            num -= arab[i];
            ret += roma[i];
        } else {
            i++;
        }
    }

    return ret;
};