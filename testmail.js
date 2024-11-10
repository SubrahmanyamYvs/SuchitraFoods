const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

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
