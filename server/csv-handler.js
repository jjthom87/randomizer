const fs = require("fs");
const { parse } = require("csv-parse");

const randomStuffFromCsv = [];
const columns = ["Title","Year"];
let inverval = null;
let intervalNumber = 5000;
let randomNumberFromArray = null
fs.createReadStream("./movies.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    var randomStuff = {}
    for(var i = 0; i < row.length; i++){
      randomStuff[columns[i]] = row[i]
    }
    randomStuffFromCsv.push(randomStuff);
  })