const request = require('request');

const breed = process.argv.slice(2)
const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback(undefined,error);
    } else {
      const data = JSON.parse(body);
      const description = data[0].description
      callback(description, undefined)
    }
})
}
  const callback = function (data,error) {
    if (error) {
      console.log("Breed not found", error)
    } else if (data) {
      console.log(data)
    }
  }
  fetchBreedDescription(breed[0],callback)

//fetchBreedDescription(breed[0],callback)
// console.log(data);
// console.log(typeof data);
