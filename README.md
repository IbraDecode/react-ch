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

**Request:**
```json
{
  "messageUrl": "https://whatsapp.com/channel/xxx/123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Reaction triggered",
  "data": {
    "messageUrl": "https://whatsapp.com/channel/xxx/123",
    "receivedAt": "2026-02-22T..."
  }
}
```

### GET /api/health

Health check endpoint.

## Cara Kerja

1. Socketon library POST ke webhook ini saat ada pesan baru di newsletter
2. Webhook receive & bisa logging/analytics
3. Library otomatis reaction (emoji dari URL param)

## URL Setup

Di library Socketon (sudah ter-encrypt):
```
https://api-socketon.vercel.app/api/react?emoji=🔥
```

Ubah emoji di URL sesuai keinginan.
