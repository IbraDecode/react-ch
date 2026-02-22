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

  const { messageUrl, emojiReact } = req.body;

  if (!messageUrl) {
    return res.status(400).json({ 
      success: false, 
      error: 'messageUrl is required',
      hint: 'Send { "messageUrl": "...", "emojiReact": "🔥" }'
    });
  }

  console.log('========================================');
  console.log('[🔥 NEW REACTION REQUEST]');
  console.log('Time:', new Date().toISOString());
  console.log('Message URL:', messageUrl);
  console.log('Emoji React:', emojiReact || '🔥 (default)');
  console.log('========================================');

  return res.status(200).json({
    success: true,
    message: 'Reaction triggered!',
    received: {
      messageUrl,
      emojiReact: emojiReact || '🔥',
      time: new Date().toISOString()
    }
  });
};
