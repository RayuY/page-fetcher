const request = require("request");
const fs = require("fs");

let argv = process.argv.slice(2);
let url = argv[0];
let path = argv[1];


request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(path, body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ?? bytes to ${path}`);
  });
});


// const data = new Uint8Array(Buffer.from('Hello Node.js'));

// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html