// /api/contact.js

// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { yourName, yourEmail, yourMessage } = req.body;

    const formData = new URLSearchParams();
    formData.append('your-name', yourName);
    formData.append('your-email', yourEmail);
    formData.append('your-message', yourMessage);

    try {
      const response = await fetch('https://gblheadlesswp.uiexpertz.com/wp-json/contact-form-7/v1/contact-forms/4e3dc2d/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      const contentType = response.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error('Unexpected response format:', text);
        return res.status(500).json({ message: 'Unexpected response format', details: text });
      }

      if (data && data.status === 'mail_sent') {
        res.status(200).json({ message: data.message });
      } else {
        res.status(400).json({ message: data.message, errors: data.invalid_fields });
      }
    } catch (error) {
      console.error('Internal Server Error:', error);
      res.status(500).json({ message: 'Internal Server Error', details: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
