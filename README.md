# alagappanr.com

A single static biography page. No framework, JavaScript, or build dependencies.

Edit `public/index.html` for the content and `public/styles.css` for the styling.
The self-hosted Lato fonts and system light/dark colors preserve the original
site's look and feel. The font license is in `public/fonts/OFL.txt`.

Preview locally:

```sh
python3 -m http.server 8000 --directory public
```

Open http://localhost:8000. GitHub Actions deploys `public/` to GitHub Pages on
each push to `main`; the custom domain is `alagappanr.com`.
