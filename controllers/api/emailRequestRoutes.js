const { fstat } = require('fs');
const { rest } = require('lodash');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const fs = require('fs');


const router = require('express').Router();

router.get('/email', (req, res) => {
    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'iVentoryRequests@gmail.com',
          pass: 'Potatolife123#'
        }
      }));
      var mailOptions = {
        from: 'iVentoryRequests@gmail.com',
        to: 'jp.graphics.011@gmail.com',
        subject: 'Sending Email using Node.js[nodemailer]',
        text: 'That was easy!',
        attachments: [
            {
                filename: 'test.csv',
                content: fs.createReadStream('test.csv')
            }
        ]
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.status(200).send({done: true});
});



module.exports = router;