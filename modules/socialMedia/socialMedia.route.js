const router = require('express').Router();
const socialMediaController = require('./socialMedia.controller');

// middleware
const uploader = require('./../../middlewares/uploader');
const authenticate = require('./../../middlewares/authenticate');

router.route('/')
    .get(socialMediaController.find)
    .post(authenticate, uploader.array('image'), socialMediaController.insert)

router.route('/:id')
    .get(socialMediaController.findById)
    .put(authenticate, uploader.array('image'), socialMediaController.update)
    .delete(authenticate, socialMediaController.remove);

module.exports = router;
