const express = require('express');
const router = express.Router();
const userController = require('../app/controller/UserController')

router.use('/create', userController.create)
router.use('/createOne',userController.createOne)
router.use('/index',userController.index)

router.use('/update/:id',userController.update)

router.use('/updateOne', userController.updateOne)

router.use('/delete/:id',userController.delete)

module.exports = router;