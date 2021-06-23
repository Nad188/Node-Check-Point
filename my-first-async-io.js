var fs = require("fs");
var file = process.argv[2];

fs.readFile(file, (err, contents) => {
  var totalLines = contents.toString().split("\n").length - 1;
  if (err) return console.log("there is an error");
  else console.log(totalLines);
});
