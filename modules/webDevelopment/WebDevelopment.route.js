const router = require('express').Router();
const webDevelopmentController = require('./webDevelopment.controller');
const webDevelopmentContentController = require('./webDevelopmentContent.controller')
// middleware
const uploader = require('../../middlewares/uploader');
const authenticate = require('../../middlewares/authenticate');

router.route('/')
    .get(webDevelopmentController.find)
    .put(authenticate, uploader.array('image'), webDevelopmentController.update)
    .post(authenticate, uploader.array('image'), webDevelopmentController.insert)
    .delete(authenticate, webDevelopmentController.remove);

router.route('/content/')
    .get(webDevelopmentContentController.find)
    .post(authenticate, uploader.array('image'), webDevelopmentContentController.insert);

router.route('/contents/:id')
    .get(webDevelopmentContentController.findById)
    .put(authenticate, uploader.array('image'), webDevelopmentContentController.update)
    .delete(authenticate, webDevelopmentContentController.remove);

router.route('/:id')
    .get(webDevelopmentController.findById)
    .put(authenticate, uploader.array('image'), webDevelopmentController.update)
    .delete(authenticate, webDevelopmentController.remove);

module.exports = router;