const sharp = require('sharp');

sharp("screenshot.png").extract({ width: 1205, height: 505, left: 358, top: 650 }).toFile("final.png")
.then(function(new_file_info) {
    console.log("Image cropped and saved");
})
.catch(function(err) {
    console.log(err);
});
