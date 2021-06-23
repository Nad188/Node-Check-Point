const fs = require("fs");
const path = require("path");
const file = process.argv[2];
const extension = "." + process.argv[3];

fs.readdir(file, (err, files) => {
  if (err) return console.log("there is an error");
  else {
    files.forEach((thefile) => {
      if (path.extname(thefile) === extension) {
        console.log(thefile);
      }
    });
  }
});
