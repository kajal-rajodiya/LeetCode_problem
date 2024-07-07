/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let totalDrank=0;
    let emptyBottle=0;

    while(numBottles > 0)
    {
        totalDrank = totalDrank + numBottles;
        emptyBottle = emptyBottle + numBottles;

        numBottles = Math.floor(emptyBottle / numExchange);
        emptyBottle = emptyBottle % numExchange;
    }
    return totalDrank;
};
console.log(numWaterBottles(9,3));