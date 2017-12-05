/*jshint esversion: 6*/
// refer nodemailer for more info

var transporterStr = 'smtps://m.chirag%40valuebound.com:chiragvb@smtp.gmail.com';

var mailOptions = {
    from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
    to: 'm.chirag@valuebound.com,', // list of receivers
    subject: 'Cron fail', // Subject line
    text: 'file has been attached', // plaintext body
    html: '<b>Please find the attached file.</b> results attached' // html body
};

if (typeof window === 'undefined') {
  exports.transporterStr = transporterStr;
  exports.mailOptions = mailOptions;
} else {
  if (!window.config)
    window.config = {};
  window.config.transporterStr = transporterStr;
  window.config.mailOptions = mailOptions;
}
