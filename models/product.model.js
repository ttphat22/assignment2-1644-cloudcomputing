const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    Product_ID: {
        type: String,
    },
    Product_Name: {
        type: String
    },
    Quantity: {
        type: Number
    },
    Price: {
        type: Number
    },
    Description: {
        type: String
    },
    imagename: {
        type: String
    } 
})

mongoose.model('Product', productSchema);