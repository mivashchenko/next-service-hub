# 🚀 NextServiceHub

**A unified interface for third-party services (auth, email, subscriptions, and more) — built for Next.js.**

> 🔌 Plug in your favorite providers like Auth0, Firebase, Stripe, and SendGrid — and use a single consistent API across
> your app.

---

## 🎯 Why ServiceHub?

- ✅ **Unified interface** for third-party services
- 🔄 **Easily switch** between providers (Auth0 ↔ Firebase, Stripe ↔ Paddle, etc.)
- 🧩 **Modular & extensible** — bring your own adapters
- 🔐 **Built for Next.js** — SSR/CSR aware helpers included
- 📦 Minimal, dependency-light, and TypeScript-first

---

## 📦 Installation

```bash
npm install @next-service-hub/core
# or
yarn add @next-service-hub/core
```

⸻

🛠️ Usage Example

1. Initialize with your config:

```typescript
// setup.ts
import {ServiceHub} from '@servicehub/core';

ServiceHub.init({
    auth: {
        provider: 'auth0',
        config: {
            domain: process.env.AUTH0_DOMAIN,
            clientId: process.env.AUTH0_CLIENT_ID,
        },
    },
    email: {
        provider: 'sendgrid',
        config: {
            apiKey: process.env.SENDGRID_API_KEY,
        },
    },
    subscription: {
        provider: 'stripe',
        config: {
            apiKey: process.env.STRIPE_API_KEY,
        },
    },
});
```

2. Use in your Next.js app

```typescript
await ServiceHub.auth.login(email, password);
await ServiceHub.email.send({
    to: 'user@example.com',
    subject: 'Welcome!',
    body: 'Thanks for joining us!',
});
await ServiceHub.subscription.create(userId, planId);
```

⸻

🔌 Supported Providers

| Category | Providers
Auth Auth0, Firebase (coming soon)
Email SendGrid, Nodemailer
Subscription Stripe
More coming… Mailgun, Supabase, Paddle

| Category     |           Providers           |
|--------------|:-----------------------------:|
| Auth         | Auth0, Firebase (coming soon) | 
| Email        |     SendGrid, Nodemailer      |
| Subscription |            Stripe             |
| More coming… |   Mailgun, Supabase, Paddle   |

⸻

📚 Docs

- Installation Guide
- Provider Configuration
- Next.js Integration
- Extending with Custom Adapters

⸻

🧪 Examples
- Next.js Starter Template
- Firebase + Mailgun setup
- Stripe Webhooks integration

⸻

🧩 Extending the Hub

```typescript
import { MyCoolEmailProvider } from './customProvider';

ServiceHub.extend('email', MyCoolEmailProvider);
```

Create your adapter using the interface:

```typescript
interface IEmailProvider {
    sendEmail(options: EmailOptions): Promise<void>;
}
```

⸻

🚧 Roadmap
- Add OAuth login flow helpers
- Provider fallback support
- Configuration dashboard (hosted)
- More adapters: Supabase, Postmark, Paddle
- 
⸻

💬 Community
- Join us on Discord
- Follow updates on Twitter

⸻

🛡 License

MIT License © 2025 [Your Name or Org]

⸻

🙏 Contributing

We welcome PRs and feedback!

1. Fork the repo
2. Create a feature branch
3. Submit a PR

Check out CONTRIBUTING.md for details.
