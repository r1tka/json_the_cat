
const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];
  const callback = function (error,data) {
    if (error) {
      console.log("Breed not found:", error)
    } else if (data) {
      console.log(data)
    }
  }
fetchBreedDescription(breedName?.[0],callback)









