'use strict';

module.exports = app => {
  app.once('server', () => {
    // 访问量
    app.visitAmount = 2386;
  });
};
