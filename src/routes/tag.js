const express = require('express');
const router = express.Router();
const tagController = require('../app/controller/TagController');

router.use('/index', tagController.index)

router.use('/create', tagController.create)

router.use('/createOne', tagController.createOne)

router.use('/update/:id', tagController.update)

router.use('/updateOne', tagController.updateOne)

router.use('/delete/:id', tagController.delete)

module.exports = router;