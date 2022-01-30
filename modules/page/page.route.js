const router = require('express').Router();
const firstPage = require('./firstPage.controller');
const secondPage = require('./secondPage.controller');
const ThirdPage = require('./thirdPage.controller');
const fourthPage = require('./fourthPage.controller');
const fifthPage = require('./fifthPage.controller');

// middlewares
const uploader = require('../../middlewares/uploader') // Fileupload
const authenticate = require('../../middlewares/authenticate'); // authenticate

router.route('/first-page')
    .get(firstPage.find)
    .post(authenticate, uploader.single('image'), firstPage.insert)
    .put(authenticate, uploader.single('image'), firstPage.update)

router.route('/second-page')
    .get(secondPage.find)
    .post(authenticate, uploader.single('img'), secondPage.insert)
router.route('/second-pages/:id')
    .get(authenticate, secondPage.findById)
    .put(authenticate, uploader.single('img'), secondPage.update)
    
router.route('/third-page')
    .get(ThirdPage.find)
    .post(authenticate, uploader.single('img'), ThirdPage.insert)
    .put(authenticate, uploader.single('img'), ThirdPage.update)
router.route('/third-pages/:id')
    .get(ThirdPage.findById)
    .put(authenticate, uploader.single('img'), ThirdPage.update)


router.route('/fourth-page')    
    .get(fourthPage.find)
    .post(authenticate, uploader.single('img'), fourthPage.insert)
router.route('/fourth-pages/:id')    
    .get(fourthPage.findById)
    .put(authenticate, uploader.single('img'), fourthPage.update)

router.route('/fifth-page')    
    .get(fifthPage.find)
    .post(authenticate, uploader.single('img'), fifthPage.insert)
router.route('/fifth-pages/:id')
    .get(authenticate, fifthPage.findById)
    .put(authenticate, uploader.single('img'), fifthPage.update)


module.exports = router;