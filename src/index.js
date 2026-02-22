const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'ok',
      service: 'Socketon Webhook',
      version: '1.0.0',
      endpoints: {
        POST: '/api/react'
      }
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { newsletterId, messageId, emojiReact, urlChannel } = req.body;

  if (!newsletterId || !messageId) {
    return res.status(400).json({ 
      success: false, 
      error: 'newsletterId and messageId are required',
      hint: 'Send { "newsletterId": "...@newsletter", "messageId": "123" }'
    });
  }

  const emoji = emojiReact || '🔥';

  console.log('========================================');
  console.log('[🔥 NEW REACTION REQUEST]');
  console.log('Time:', new Date().toISOString());
  console.log('Newsletter ID:', newsletterId);
  console.log('Message ID:', messageId);
  console.log('URL Channel:', urlChannel || '-');
  console.log('Emoji:', emoji);
  console.log('========================================');

  return res.status(200).json({
    success: true,
    message: 'Reaction triggered!',
    emoji: emoji,
    received: {
      newsletterId,
      messageId,
      urlChannel,
      time: new Date().toISOString()
    }
  });
};
