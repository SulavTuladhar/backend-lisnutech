const router = require('express').Router();

// Importing routing level middleware
const AuthRouter = require('./controller/auth.controller');
const UserRouter = require('./controller/user.controller');
const PageRouter = require('./modules/page/page.route');
const socialMediaRouter = require('./modules/socialMedia/socialMedia.route')
const webDevelopmentRouter = require('./modules/webDevelopment/webDevelopment.route')
const digitalMarketingRouter = require('./modules/digitalMarketing/digitalMarketing.route')
const graphicsDesignRouter = require('./modules/graphicsDesign/graphicsDesign.route')
const blogRouter = require('./modules/blog/blog.router')
// const webDevelopmentContentRouter = require('./modules/webDevelopment/webDevelopmentContent.route')
// Importing application level middleware
const authenticate = require('./middlewares/authenticate');

router.use('/auth', AuthRouter);
router.use('/user',authenticate, UserRouter);
router.use('/page', PageRouter);
router.use('/socialMedia', socialMediaRouter);
router.use('/webDevelopment', webDevelopmentRouter);
router.use('/digitalMarketing', digitalMarketingRouter);
router.use('/graphicsDesign', graphicsDesignRouter);
router.use('/blog', blogRouter);
// router.use('/webDevelopmentContent', webDevelopmentContentRouter);

module.exports = router;