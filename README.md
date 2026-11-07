# AI MCP Tools

A starter frontend for a platform that will connect external services to MCP-compatible AI tools. The first planned integration is Telegram.

## Current status

This repository currently contains a **frontend prototype only**:
- Responsive landing page and dashboard-style UI
- Telegram integration preview
- Feature and security sections

Not implemented yet:
- Real sign-in (Google / Telegram)
- Telegram account authorization or Bot API connection
- MCP server, database, API routes, or background jobs
- Production security review

The interface does not send Telegram messages or access any account data yet.

## Requirements

- Node.js 20.9+
- npm

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Next development milestones

1. Establish the backend architecture and threat model.
2. Implement secure authentication and session handling.
3. Add Telegram Bot API support, then evaluate MTProto/TDLib for personal-account features.
4. Implement scoped MCP tools and explicit user consent for sensitive actions.
5. Add tests, audit logging, rate limits, and deployment configuration.

## Security

Never commit `.env.local`, API hashes, bot tokens, session files, or user credentials. Telegram Login and Telegram account access are different mechanisms. A website login does not grant access to personal chats.
