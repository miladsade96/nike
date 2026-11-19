# Nike collection concept

A responsive React landing page for a sample sneaker collection. It is an independent design concept, with sample products, prices, reviews and statistics. It does not take orders or payments.

## Run locally

Use Node 22.14 or newer (Node 22 is recorded in `.nvmrc`).

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4181
```

Open http://127.0.0.1:4181. No environment variables or accounts are needed.

## What works

- Desktop and mobile navigation, section links and keyboard focus.
- Shoe image selection with an announced selected state.
- Product, quality, service, collection, review and footer sections.
- Required email validation and an honest local-preview message.
- Reduced-motion preferences and a skip-to-content link.

## Newsletter on Netlify

`netlify.toml` builds with `npm run build` and publishes `dist`. The matching static form in `index.html` lets Netlify discover `collection-updates`; the React form posts the same fields with a honeypot and redirects to `/thanks.html`.

Enable Netlify form detection before deploying, then verify that `collection-updates` appears in the site's Forms dashboard. Test a submission after deployment and check the actual stored submission. Notification emails or a mailing-list integration must be configured separately. Local development does not submit addresses. Other static hosts need their own form handler.

No deployment or live form submission was performed during this repair.

## Verification

```sh
npm test
npm run lint
npm run build
npm audit
```

On 2026-11-19: 5 automated tests passed, lint and production build passed, and npm audit reported 0 vulnerabilities in the installed dependency tree. Browser checks covered desktop and 390px mobile layouts, navigation, image selection, local newsletter behavior, missing images and console errors. Screenshots are in the local, ignored `qa` folder.

Changes are on `codex/fix-nike`. No deployment is required to review locally.
