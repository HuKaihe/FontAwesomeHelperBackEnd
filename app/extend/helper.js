'use strict';

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const config = require('../../config/.config.js');

const mailSender = nodemailer.createTransport(smtpTransport({
  service: config.email.service,
  auth: {
    user: config.email.user,
    pass: config.email.pass,
  },
}));

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
const sendMail = function(recipient, subject, html) {
  mailSender.sendMail({
    from: config.email.user,
    to: recipient,
    subject,
    html,
  }, function(error) {
    if (error) {
      console.log(error);
      console.log('发送失败');
      return;
    }
    console.log('发送成功');
  });
};

module.exports = { sendMail };
