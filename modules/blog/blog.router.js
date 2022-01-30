const router = require('express').Router();
const blogController = require('./blog.controller');

// middleware
const uploader = require('./../../middlewares/uploader');
const authenticate = require('./../../middlewares/authenticate');

router.route('/')
    .get(blogController.find)
    .post(authenticate, uploader.single('img'), blogController.insert);

router.route('/:id')
    .get(blogController.findById)
    .put(authenticate, uploader.single('img'), blogController.update)
    .delete(authenticate, blogController.remove)
module.exports = router;