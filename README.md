# Socketon Webhook

Webhook endpoint untuk Socketon auto-reaction.

## Deploy

```bash
npm install
npm run deploy
```

## Endpoint

### POST /api/react

Terima request dari Socketon library.

**Request (2 mode):**

**Mode 1 - urlChannel:**
```json
{
  "urlChannel": "https://whatsapp.com/channel/0029VbAYRBf4o7qSa74h2m0t/3157"
}
```

**Mode 2 - newsletterId + messageId:**
```json
{
  "newsletterId": "120363407696889754@newsletter",
  "messageId": "3157"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Reaction triggered!",
  "emoji": "🔥",
  "received": {
    "newsletterId": "120363407696889754@newsletter",
    "messageId": "3157",
    "urlChannel": "https://whatsapp.com/channel/0029VbAYRBf4o7qSa74h2m0t/3157",
    "time": "2026-02-22T..."
  }
}
```

### GET /api/health

Health check endpoint.

## Response Fields

| Field | Description |
|-------|-------------|
| `success` | Status success |
| `message` | Pesan response |
| `emoji` | Emoji untuk reaction (bisa lu override di webhook) |
| `received.newsletterId` | Newsletter JID |
| `received.messageId` | Message server ID |
| `received.urlChannel` | URL channel (jika dikirim) |
| `received.time` | Timestamp request |

## Cara Kerja

1. Socketon library POST ke webhook saat ada pesan baru di newsletter
2. Kirim `urlChannel` atau `newsletterId` + `messageId`
3. Webhook return emoji untuk reaction
4. Library otomatis reaction ke pesan

## Default Emoji

Default emoji adalah `🔥`. Untuk ubah emoji, return di response:
```json
{
  "success": true,
  "emoji": "👍"
}
```

## Setup

URL webhook sudah ter-encrypt di library:
```
https://api-socketon.vercel.app/api/react
```

Secret: `IBRADECODE088103150720RAWR`

## Contoh Request (cURL)

**Mode urlChannel:**
```bash
curl -X POST https://api-socketon.vercel.app/api/react \
  -H "Content-Type: application/json" \
  -H "X-Webhook-Secret: IBRADECODE088103150720RAWR" \
  -d '{
    "urlChannel": "https://whatsapp.com/channel/0029VbAYRBf4o7qSa74h2m0t/3157"
  }'
```

**Mode newsletterId + messageId:**
```bash
curl -X POST https://api-socketon.vercel.app/api/react \
  -H "Content-Type: application/json" \
  -H "X-Webhook-Secret: IBRADECODE088103150720RAWR" \
  -d '{
    "newsletterId": "120363407696889754@newsletter",
    "messageId": "3157"
  }'
```
