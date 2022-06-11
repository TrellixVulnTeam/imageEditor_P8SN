const sharp = require("sharp")

module.exports = function(path, width) {
	sharp(path)
		.resize({width: width})
		.toFile("./resized/output_resized.jpg", (error) => {
			if (error)
				console.log(error)
			else
				console.log("Image resized!")
		})
}
