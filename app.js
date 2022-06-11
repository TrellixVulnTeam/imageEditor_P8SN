const resize = require("./resize.js");
const compress = require("./compress.js");

let args = process.argv.slice(2);
let action = args[0];
let inputPath = args[1];
let width = Number(args[2]);

if (action == "resize") {
	resize(inputPath, width);
} else if (action == "compress") {
	compress(inputPath);
}

