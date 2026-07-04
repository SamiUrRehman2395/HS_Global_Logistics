# HS Global Logistics — Website

A complete marketing website for HS Global Logistics, built with React (Vite) and a Vercel serverless function for the contact/quote form.

Pages: **Home, Services, About, Contact** — fully responsive (mobile, tablet, desktop).

---

## 1. Local development

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

This starts the site at `http://localhost:5173`. The contact form's "Send Message" button calls `/api/contact`, which only exists as a **Vercel serverless function** — it will not respond while running `npm run dev` alone. To test the form locally, install the Vercel CLI and run `vercel dev` instead (see below), or just test the form after deploying.

## 2. Configure the contact form email (SMTP)

The form at `/contact` sends two emails through `api/contact.js`:
1. A notification to your sales inbox with the lead's details.
2. An automatic confirmation email back to the person who filled out the form.

Copy `.env.example` to `.env` and fill in real SMTP credentials:

```bash
cp .env.example .env
```

- **Using Gmail:** set `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_USER` to the sending Gmail address, and `SMTP_PASS` to a 16-character **App Password** (Google Account → Security → 2-Step Verification → App Passwords). Your normal Gmail password will not work.
- **Using a business email host** (e.g. your domain's cPanel/Zoho/Outlook mailbox): ask your host for the SMTP hostname, port, and whether SSL/TLS ("secure") is required, then fill those into the same variables.
- `CONTACT_TO_EMAIL` is the inbox that receives new quote requests — defaults to `sales@hsgloballogistic.com`.

**Never commit your real `.env` file** — it's already in `.gitignore`.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "HS Global Logistics website"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

## 4. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the GitHub repo you just pushed.
2. Vercel auto-detects the **Vite** framework — leave the default build settings (`npm run build`, output directory `dist`).
3. Before clicking Deploy, open **Environment Variables** and add the same variables from your `.env` file (`SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO_EMAIL`).
4. Click **Deploy**. Vercel will build the React site and automatically turn `api/contact.js` into a serverless function at `/api/contact`.
5. Every future `git push` to `main` will auto-redeploy, exactly like your other projects.

## 5. Project structure

```
├── api/
│   └── contact.js        # Serverless function — sends the quote-request emails
├── src/
│   ├── assets/            # Dry van & reefer trailer photos
│   ├── components/        # Navbar, Footer, CTA, FAQ, Testimonials, etc.
│   ├── pages/              # Home, Services, About, Contact
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          # Design tokens (colors, type, spacing)
├── index.html
├── vercel.json             # SPA rewrites for React Router
├── vite.config.js
└── package.json
```

## 6. Editing content later

- **Company info** (address, phone, email, hours): edit `src/components/Footer.jsx` and `src/pages/Contact.jsx`.
- **Colors/fonts:** all design tokens live at the top of `src/index.css` under `:root` — change one value there and it updates across the whole site.
- **Trailer photos:** replace `src/assets/dryvan.jpg` and `src/assets/reefer.jpg` with new images of the same filenames, or update the `import` paths in `src/pages/Home.jsx` and `src/pages/Services.jsx`.
