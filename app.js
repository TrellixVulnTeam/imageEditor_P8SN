const fs = require("fs");
let sharp = require("sharp");
let fileName = process.argv[3];
let path = process.argv[5];
let width = Number(process.argv[6]);

if (fs.existsSync("/Users/brianlucas/Documents/Image-Editor")) {
  if (
    process.argv[2] == "resize" &&
    fileName != "" &&
    process.argv[4] == "from"
  ) {
    resize(path, width);
  } else if (process.argv[2] == "compress") {
    compress(path);
  }
} else {
  fs.mkdirSync("/Users/brianlucas/Documents/Image-Editor");
  fs.mkdirSync("/Users/brianlucas/Documents/Image-Editor/resized");
  fs.mkdirSync("/Users/brianlucas/Documents/Image-Editor/compressed");

  if (
    process.argv[2] == "resize" &&
    fileName != "" &&
    process.argv[4] == "from"
  ) {
    resize(path, width);
  } else if (process.argv[2] == "compress") {
    compress(path);
  }
}

function resize(path, width) {
  sharp(path)
    .resize({ width: width })
    .toFile(
      `/Users/brianlucas/Documents/Image-Editor/resized/${fileName}`,
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File resized!");
        }
      }
    );
}

function compress(path) {}
