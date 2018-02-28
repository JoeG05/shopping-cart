var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: "https://www.dartscorner.co.uk/images/harrowsretina_x_dartflights_std_red.png",
        title: "Harrow's Retina-X",
        description: "Red",
        price: .70
    }),
    new Product({
        imagePath: "https://www.dartscorner.co.uk/images/harrowsretina_x_dartflights_std_blue.png",
        title: "Harrow's Retina-X",
        description: "Blue",
        price: .70
    }),
    new Product({
        imagePath: "https://www.dartscorner.co.uk/images/harrowsretina_x_dartflights_std_green.png",
        title: "Harrow's Retina-X",
        description: "Green",
        price: .70
    }),
    new Product({
        imagePath: "https://www.dartscorner.co.uk/images/harrowsretina_x_dartflights_std_yellow.png",
        title: "Harrow's Retina-X",
        description: "Yellow",
        price: .70
    }),
    new Product({
        imagePath: "https://www.dartscorner.co.uk/images/harrowsretina_x_dartflights_std_purple.png",
        title: "Harrow's Retina-X",
        description: "Purple",
        price: .70
    }),
    new Product({
        imagePath: "https://www.dartscorner.co.uk/images/harrowsretina_x_dartflights_std_clear.png",
        title: "Harrow's Retina-X",
        description: "Clear",
        price: .70
    }),
    new Product({
        imagePath: "https://www.dartscorner.co.uk/images/harrowsretina_x_dartflights_std_black.png",
        title: "Harrow's Retina-X",
        description: "Black",
        price: .70
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        console.log(result);
        done++;
        if (done===products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}