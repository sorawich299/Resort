
# Solunar Villas – Beachfront Luxury Retreat Website

This is a [Next.js](https://nextjs.org) project designed to showcase **Solunar Villas**, a collection of luxurious beachfront retreats. The site includes an interactive reservation system, villa galleries, and contact forms powered by EmailJS.

## 🚀 Getting Started

To start developing locally:

```bash
pnpm install   # Install dependencies
pnpm dev       # Start the development server
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> Note: You can modify the homepage by editing `app/page.tsx`. Changes will auto-refresh.

---

## 🧩 Features

- ✅ **Fully responsive** UI with Tailwind CSS
- ✅ **Dynamic villa pages** (`/Infinity`, `/Horizon`)
- ✅ **Reservation modal** with form validation
- ✅ **Email sending** via EmailJS (confirmation + internal copy)
- ✅ **SEO-ready** with reusable `<SeoHead />` component
- ✅ **Image gallery & lightbox**
- ✅ **Custom animations** using `framer-motion`

---

## 📂 Project Structure

```
.
├── app/                      # App router pages and layouts
│   ├── Gallery/              # Gallery pages and layout
│   ├── Horizon/              # Horizon villa pages and layout
│   ├── Infinity/             # Infinity villa pages and layout
│   ├── layout.tsx           # Root layout with SEO head
│   └── page.tsx             # Main homepage
├── components/              # Shared and UI components
│   ├── common/              # Reusable common components (form, modal, etc.)
│   ├── Gallery/             # Gallery-specific components
│   └── VillaDetail/         # Villa detail section components
├── public/                  # Public assets like images, favicon, etc.
├── styles/                  # (If used) Additional global or component styles
├── .next/                   # Next.js build output (ignored in Git)
├── package.json             # Project config and dependencies
├── tsconfig.json            # TypeScript config
└── README.md                # Project overview and documentation
```

---

## 🧠 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [React Hook Form](https://react-hook-form.com/)
- [Tailwind CSS](https://tailwindcss.com)

---

## ☁️ Deployment

This project is optimized for deployment via [Vercel](https://vercel.com), the creators of Next.js.

To deploy:

1. Push the project to GitHub
2. Connect to Vercel
3. Done!

> For advanced configuration, see [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)

---

## 📝 License

This project is for internal use or demo purposes. For commercial deployment, please consult the Solunar Villas development team.
