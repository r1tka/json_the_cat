const request = require('request');
const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      console.log("ERROR",  error)
      callback(error,null);
    } 
    const data = JSON.parse(body);
    const description = data?.[0]?.description;
    
    if (!description) {
      callback("Breed name was not defined",null);
    } else {
      callback(null, description);
    }
  });
};
module.exports = { fetchBreedDescription };
