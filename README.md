# Doce Camada — Landing Page

Landing page de encomendas para doceria artesanal, construída com **Next.js 15 + React 19**.

## Como rodar localmente

```bash
cd doceria
npm install
cp .env.example .env.local
# edite .env.local com seu número de WhatsApp
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Configuração

Edite `doceria/data/site.js` para alterar nome da doceria e produtos do cardápio.

Edite `doceria/.env.local` para configurar o número do WhatsApp:

```env
NEXT_PUBLIC_WHATSAPP=5531999999999
```

> ⚠️ Nunca suba o `.env.local` para o GitHub. Ele já está no `.gitignore`.
