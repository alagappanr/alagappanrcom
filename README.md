# alagappanr.com

A single static biography page. No framework or build dependencies.

Edit `public/index.html` for the content and `public/styles.css` for the styling.
The self-hosted Lato fonts and system light/dark colors preserve the original
site's look and feel. The font license is in `public/fonts/OFL.txt`.

The subtle three-icon control at the top right offers System, Light, and Dark
through monitor, sun, and moon buttons. The selected mode is highlighted; each
button has an accessible label, keyboard focus indicator, and 44px touch target.
`public/theme.js` restores an explicit choice before the page renders and remembers it in local
storage. System mode follows the device setting. The page still follows the
device theme when JavaScript is disabled, and the control is then hidden.

The approved experience figure is 15+ years in both the headline and biography.
It is maintained manually until exact employment and internship dates are
available for an accurate automatic calculation.

The circular headshot is in `public/images/portrait.jpg`. Social profile links
and the direct email link live in the footer in `public/index.html`. The email
link uses `plot-twist@alagappanr.com`, delivered through the domain's existing
catchall. It opens the visitor's email app; no contact form or backend is needed.

Preview locally:

```sh
python3 -m http.server 8000 --directory public
```

Open http://localhost:8000. GitHub Actions deploys `public/` to GitHub Pages on
each push to `main`; the custom domain is `alagappanr.com`.
