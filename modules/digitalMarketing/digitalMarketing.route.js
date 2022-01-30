const router = require('express').Router();
const digitalMarketingContentController = require('./digitalMarketingContent.controller');

// middleware
const uploader = require('../../middlewares/uploader');
const authenticate = require('../../middlewares/authenticate');

router.route('/')
    .get(digitalMarketingContentController.find)
    .post(authenticate, uploader.array('image'), digitalMarketingContentController.insert)
    // .delete(authenticate, uploader.array('image'), digitalMarketingContentController.remove)

router.route('/:id')
    .get(digitalMarketingContentController.findById)
    .put(authenticate, uploader.array('image'), digitalMarketingContentController.update)
    .delete(authenticate, uploader.array('image'), digitalMarketingContentController.remove)

module.exports = router;

