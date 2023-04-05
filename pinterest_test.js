const z = require("./index");
const q = "Zero Two";

z.pinterest(q)
  .then(result => {
    console.log(result);
  });