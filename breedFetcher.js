const request = require('request');
let arrayOfBreed = process.argv.slice(2);
let breedToSearch = arrayOfBreed[0].toLowerCase().slice(0,3);


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedToSearch}`, function(error,response,body) {
  if (error) {
    console.log("The breed was not found!");
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});