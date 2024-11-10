// pages/api/contact.js
import sendgrid from '@sendgrid/mail';
console.log('SendGrid API Key:', process.env.SENDGRID_API_KEY);
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, category, message } = req.body;

    try {
      await sendgrid.send({
        to: 'connect@suchitrafoods.com',
        from: 'connect@suchitrafoods.com',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <div>
            <h2>Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Message:</strong><br>${message}</p>
          </div>
        `,
      });

      res
        .status(200)
        .json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error('SendGrid error:', error);
      res
        .status(500)
        .json({ success: false, message: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
