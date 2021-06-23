const mymodule = require("./myModule");
const dir = process.argv[2];
const filter = process.argv[3];

var callback = (error, filtered) => {
  if (error) {
    console.log("there is an error", err);
  }
  for (var index in filtered) {
    console.log(filtered[index]);
  }
};

mymodule(dir, filter, callback);
