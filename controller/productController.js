const express = require('express');
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const router = express.Router();
const multer = require("multer");


router.get("/", (req, res) => {
    res.render("product/addproduct", {
        viewTitle: "Insert Product"
    })
})

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./public/images");
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
  });

var upload = multer({
    storage: Storage,
  }).single("image");

router.post("/", upload, (req, res) => {
    if (req.body._id == "") {
        insertRecord(req, res);
    }
    else {
        updateRecord(req, res);
    }
})

function insertRecord(req, res) {
    var product = new Product();
    product.Product_ID = req.body.Product_ID;
    product.Product_Name = req.body.Product_Name;
    product.Quantity = req.body.Quantity;
    product.Price = req.body.Price;
    product.Description = req.body.Description;
    product.imagename = req.file.filename;
    product.save((err, doc) => {
        if (!err) {
            res.redirect('product/list');
        }
        else {
            if (err.name == "ValidationError") {
                handleValidationError(err, req.body);
                res.render("product/addproduct", {
                    viewTitle: "Insert product",
                    product: req.body
                })
            }
            console.log("Error occured during record insertion" + err);
        }
    })
}




function updateRecord(req, res) {
    Product.findOneAndUpdate({ _id: req.body._id, }, {Product_ID: req.body.Product_ID, 
        Product_Name: req.body.Product_Name, 
        Quantity: req.body.Quantity, Price: req.body.Price,
        Description: req.body.Description,
        imagename: req.file.filename, }, (err, doc) => {
        if (!err) {
            res.redirect('product/list');
        }
        else {
            if (err.name == "ValidationError") {
                handleValidationError(err, req.body);
                res.render("product/addproduct", {
                    viewTitle: 'Update Product',
                    product: req.body
                });
            }
            else {
                console.log("Error occured in Updating the records" + err);
            }
        }
    })
}

router.get('/list', (req, res) => {
    Product.find((err, docs) => {
        if (!err) {
            res.render("product/list", {
                list: docs
            })
        }
    })
})

router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("product/addproduct", {
                viewTitle: "Update Product",
                product: doc
            })
        }
    })
})

router.get('/delete/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/product/list');
        }
        else {
            console.log("An error occured during the Delete Process" + err);
        }
    })
})

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'Produc_tID':
                body['Product_IDError'] = err.errors[field].message;
                break;

            case 'Product_Name':
                body['Product_NameError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

module.exports = router;