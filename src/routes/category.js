const express = require('express');
const router = express.Router();
const categoryController = require('../app/controller/CategoryController');

router.use('/index', categoryController.index)

router.use('/create', categoryController.create)

router.use('/createOne', categoryController.createOne)

router.use('/update/:id', categoryController.update)

router.use('/updateOne', categoryController.updateOne)

router.use('/delete/:id', categoryController.delete)


module.exports = router;