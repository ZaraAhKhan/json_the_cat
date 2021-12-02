const request = require('request');


const fetchBreedDescription = function(breedName , callBack) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error,response, body) => {
    if (error) {
      callBack(error,null);
      return;
    }
    let desc = JSON.parse(body);
    if (desc[0] === undefined) {
      callBack("The breed was not found!",null);
    } else {
      callBack(null,desc[0].description);
    }
    
  });
};

module.exports = {fetchBreedDescription};