/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count=0;
    for(let i=0;i<arr.length;i++)
    {
        if( arr[i]% 2 !== 0){
            count++;
            if(count === 3){
                return true;
            }
            }else{
                count = 0;
                 }
            }
    return false;
    
    
};

// var threeConsecutiveOdds = function(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) { // Check for odd number
//             count++;
//             if (count === 3) { // Check if there are three consecutive odds
//                 return true;
//             }
//         } else {
//             count = 0; // Reset count if a non-odd number is found
//         }
//     }
//     return false; // Return false if no three consecutive odds are found
// };