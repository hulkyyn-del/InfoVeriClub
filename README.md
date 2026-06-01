# Information Verification Club Website

## Local preview

```bash
npm install
npm run dev
```

Open the local URL shown in Terminal, usually http://localhost:5173.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Create a GitHub repository and upload this project.
2. Go to Vercel and import the GitHub repository.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

## Notes

- The website component is in `src/App.jsx`.
- The entry file is `src/main.jsx`.
- Tailwind is configured through the Vite plugin in `vite.config.js`.
- Replace the placeholder Google Form / Notion QR section before publishing.
