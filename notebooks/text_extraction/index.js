const fs = require('fs');
const path = require('path');
const fontDirectory = path.join(__dirname, 'fonts');

const generateData = require('./lib/generateData');

// fs.readdir(fontDirectory, function (err, files) {
//   if (err) {
//     return console.log('Unable to scan directory: ' + err);
//   }

//   files.forEach(function (file) {
//     let fullPath = path.join(fontDirectory, file);

//     console.log(generateData(fullPath));
//   });
// });

console.log(generateData("/home/eksoverzero/Sites/ada-ai-notebook/notebooks/sentiment_analysis/fonts/zrnic__.ttf"));
