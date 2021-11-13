const express = require('express')
const router = express.Router()
const postController = require('../app/controller/PostController')

router.use('/index', postController.index)

router.use('/create', postController.create);

router.use('/createOne', postController.createOne);

router.use('/update/:post_id', postController.update);

router.use('/updateOne', postController.updateOne);

router.use('/delete/:post_id', postController.delete);


module.exports = router;