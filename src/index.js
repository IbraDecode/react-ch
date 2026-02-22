module.exports = (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'ok',
      service: 'Socketon Webhook',
      version: '1.0.0',
      endpoints: {
        POST: '/api/react'
      },
      message: 'Webhook is running. Post messageUrl to receive emojiReact.'
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messageUrl, emojiReact } = req.body;

  if (!messageUrl) {
    return res.status(400).json({ error: 'messageUrl is required' });
  }

  console.log('[Webhook] Received:', {
    messageUrl,
    emojiReact,
    timestamp: new Date().toISOString()
  });

  return res.status(200).json({
    success: true,
    message: 'Reaction triggered',
    data: {
      messageUrl,
      emojiReact,
      receivedAt: new Date().toISOString()
    }
  });
};
