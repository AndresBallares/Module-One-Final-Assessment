/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
const removeNumbersAtOddIndices = (arr) => {
    let newArray = []
    for(let i = 0; i < arr.length; i+= 1){
        if(i % 2 === 0){ //if(i % 2 === 0)
        newArray.push(arr[i]); // newArray.push(arr[i])  
        }
    }
    return newArray; // Note:   only truthy values would be pass on to the array jajaja
}

module.exports = removeNumbersAtOddIndices