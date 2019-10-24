const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log('Bad URL or Website Down. Sorry!');
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed not found!');
  } else {
    console.log(data[0].description);
  }
});