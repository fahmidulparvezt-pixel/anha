# Anha Anzum Kona — Portfolio

React (Vite) + Tailwind CSS v4 + DaisyUI v5 frontend, Node/Express backend for the contact form.

## Run locally

```bash
npm install            # root (concurrently)
npm run install:all    # client + server dependencies
npm run dev            # client http://localhost:5173, server http://localhost:5000
```

## Customize

- **Content:** edit `client/src/data.js` (about, education, experience, certificates, skills, contact).
- **Photo:** put your picture at `client/public/profile.jpg` (portrait, 4:5 works best).
- **Colors/themes:** `client/src/index.css` (`folio-light` and `folio-dark` DaisyUI themes).
- **Messages:** contact form submissions are saved in `server/data/messages.json`.

## Production

```bash
npm run build   # builds client/dist
npm start       # Express serves the API and the built site on PORT (default 5000)
```

Environment variables (server): `PORT`, `CLIENT_ORIGIN` (comma-separated allowed origins, default `*`).
If the frontend is hosted separately from the API, set `VITE_API_URL` for the client build.
"# anha" 
