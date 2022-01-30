const router = require('express').Router();
const graphicsDesignContentController = require('./graphicsDesignContent.controller');

// middleware
const uploader = require('./../../middlewares/uploader');
const authenticate = require('./../../middlewares/authenticate');

router.route('/')
    .get(graphicsDesignContentController.find)
    .post(authenticate, uploader.array('image'), graphicsDesignContentController.insert)

router.route('/:id')
    .get(graphicsDesignContentController.findById)
    .put(authenticate, uploader.array('image'), graphicsDesignContentController.update)
    .delete(authenticate, graphicsDesignContentController.remove);

module.exports = router;