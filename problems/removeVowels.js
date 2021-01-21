/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

const removeVowels = (str) => {
    let output = "";
    const vowels = "aeiou";
    for(const char of str){
        if(!vowels.includes(char.toLowerCase())){
            output += char;
        }
    }
    return output;
};
module.exports = removeVowels
