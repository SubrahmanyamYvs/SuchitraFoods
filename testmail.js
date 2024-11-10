const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(
  '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'
);

sendgrid
  .send({
    to: 'connect@suchitrafoods.com', // replace with your email
    from: 'connect@suchitrafoods.com', // replace with a verified sender email
    subject: 'Test Email 123 from SendGrid',
    text: 'This is a test email from SendGrid setup troubleshooting.',
  })
  .then(() => {
    console.log('Email sent successfully!');
  })
  .catch((error) => {
    console.error('SendGrid error:', error);
  });
