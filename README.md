# Pavan Prudhvi Madhamsetty - Portfolio

Static portfolio site. No build step.

## Structure
- `index.html` - page content
- `css/styles.css` - styles (light and dark themes via CSS variables at the top)
- `js/main.js` - copy-email button
- `assets/` - resume PDF and its preview image

## Run locally
Open `index.html` in a browser, or in VS Code install the "Live Server" extension and click "Go Live".

## Deploy
- Vercel: `npx vercel` from this folder, or drag the folder into vercel.com > Add New > Project.
- Netlify: drag the folder onto app.netlify.com/drop.

## Updating the resume
Replace the two files in `assets/` keeping the same names, then redeploy.
