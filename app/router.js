'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.home.login);
  router.post('/logout', controller.home.logout);
  router.post('/asyncData', middleware.checkLogin, controller.home.asyncData);
  router.post('/signup', controller.home.signup);
};
