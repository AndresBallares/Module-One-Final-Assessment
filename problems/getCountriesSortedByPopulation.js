/**

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/

const getCountriesSortedByPopulation = (name) => {
     name.sort((acountry, bcountry) => {
           return bcountry.population - acountry.population;// rearrange the order to (b - a)
    });
    return name.map((bcountry) => {//here too
        return name.bcountry;
    });
  
};

module.exports = getCountriesSortedByPopulation
