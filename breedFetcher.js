const request = require('request');
let arrayOfBreed = process.argv.slice(2);
let breedToSearch = arrayOfBreed[0].toLowerCase().slice(0,6);


request(`https://api.thectapi.com/v1/breeds/search?q=${breedToSearch}`, function(error,response,body) {
  if (error) {
    console.log("Error!",error);
    return;
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("The breed was not found!");
    return;
  }
  console.log(data[0].description);
});