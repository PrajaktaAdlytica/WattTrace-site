# Deploy WattTrace on Hostinger

Repository: https://github.com/PrajaktaAdlytica/WattTrace-site

**No paid Web App upgrade is required.** If you already have ordinary Hostinger web hosting, use the static-upload instructions below. If you only own a domain, you still need a hosting service; a domain registration alone cannot store this site.

This is a React/Vite frontend. Node is used to build it; the resulting site is static. The Remotion introduction runs in the browser and needs no rendering server. The existing worker is a separate Sites packaging adapter, not a Hostinger server entry point.

## Recommended: ordinary PHP/HTML hosting + the `hostinger` branch

This route does not create a Node.js Web App. It uses an ordinary website slot in your existing hosting plan. Check that you have a remaining ordinary website slot; this is separate from choosing the Node.js web-app setup.

1. In hPanel choose **Websites → Add Website → PHP/HTML / Empty website / Custom website** (wording varies). Do not choose Node.js Web App or Website Builder.
2. Assign your already-purchased domain to this ordinary website.
3. Open its **Dashboard → Advanced → Git**.
4. Choose **Connect with GitHub** and grant the Hostinger GitHub App access to **PrajaktaAdlytica/WattTrace-site**.
5. Select repository **WattTrace-site**, branch **hostinger**, and deployment directory **public_html** (or leave the directory field blank if hPanel says blank means public_html).
6. Use a fresh target directory. If there is an existing website, back it up first and do not overwrite it blindly. Remove only the new site's default placeholder file if it blocks deployment.
7. Click **Deploy**. The branch already contains built HTML, CSS, JavaScript, images, data and `.htaccess`; no npm command or server entry point is needed on Hostinger.
8. If your Git screen provides automatic deployment, enable it. With the current GitHub App connection, push notifications are managed by the integration. Legacy Git screens may instead offer an **Auto Deployment** webhook to add in GitHub's repository **Settings → Webhooks**; follow the URL/settings provided by your own hPanel.
9. Verify the domain, HTTPS and direct page refreshes as described below.

**Updates:** edit/push source to `main`. The repository's **Build Hostinger static branch** GitHub Action runs tests/build and updates `hostinger`. Hostinger then pulls the built branch. If auto-deployment is unavailable in your hPanel, click **Deploy** after that action succeeds. Do not edit generated files on `hostinger`; the next build replaces them.

**If the GitHub connection button is absent:** the legacy form can clone this public repository using `https://github.com/PrajaktaAdlytica/WattTrace-site.git`, branch `hostinger`. Initial deployment requires an empty target directory. Or use the upload ZIP below.

Source: [Hostinger Git tool and its current/legacy setup](https://docs.hostinger.com/websites/git).

## Fallback without Git: upload the static site

Use this if you have ordinary web hosting without the managed GitHub build option.

1. Add a **PHP/HTML / custom website** under the hosting plan and assign the purchased domain.
2. Open **Websites → Dashboard → File Manager → public_html**. Back up any existing site before replacing files.
3. Upload `WattTrace-Hostinger-upload.zip`, then extract its contents directly into `public_html`.
4. Confirm `public_html/index.html`, `public_html/assets/`, `public_html/data/` and `public_html/.htaccess` exist. There must not be an extra `dist`, `client` or ZIP-name folder between `public_html` and `index.html`.
5. The included `.htaccess` provides the React Router fallback for page URLs while preserving real files. Ensure hidden files are shown in File Manager. This rule is for manual static hosting.
6. Connect the domain and verify HTTPS as described above. Test direct route refreshes.

For future updates, run `npm ci`, `npm run build` and upload the **contents of `dist/client`** again. A manual upload does not synchronize with GitHub.

Source: [Hostinger's React deployment guide](https://www.hostinger.com/tutorials/how-to-deploy-react-app/).


## Optional paid-plan route: GitHub → managed Node.js Web App

A purchased domain does not include a hosting plan. Hostinger documents this managed deployment on Business Web Hosting and eligible Cloud plans. Check that your plan exposes **Node.js web app** before selecting it.

1. Sign in to Hostinger hPanel. Open **Websites → Add Website → Node.js web app**.
2. Choose **Import your Git repository → Connect with GitHub**.
3. Authorize the Hostinger GitHub App. Select **Only select repositories**, then **PrajaktaAdlytica/WattTrace-site**.
4. Select the repository and branch **main**.
5. Review the build settings below. Do not leave the output as the usual Vite `dist` value.

| Setting | Value for this repository |
|---|---|
| Framework | React / Vite (static frontend) |
| Branch | `main` |
| Root directory | Repository root (`.` or `/`, as the UI presents it) |
| Node.js | `22` |
| Package manager | npm; keep `package-lock.json` |
| Install command, if editable | `npm ci` |
| Build command / script | `npm run build` / `build` |
| Output directory | `dist/client` |
| Server entry file | None for the static Vite preset |
| Environment variables | None required by this prototype |

6. Click **Deploy** and inspect the build log. The final output must include `dist/client/index.html`.
7. Open the temporary preview domain. Test the intro, mobile menu and a direct visit/refresh to `/products/plant-desk` and `/demo/cases/DEMO-C001`.
8. Keep automatic deployment enabled for `main`. Future pushes rebuild the site.

The managed app controls `public_html` and routing configuration. Do not hand-edit its generated `.htaccess` or upload a competing static build into that deployment. If a route fails, check the React/Vite preset and output directory first.

Sources: [Create a managed app](https://docs.hostinger.com/node.js/creating-an-app), [Build settings](https://docs.hostinger.com/node.js/build-settings), [Git deployments](https://docs.hostinger.com/node.js/git-deployments).

## Connect the domain already purchased at Hostinger

1. On the new site's card or dashboard, choose **Connect domain** (or choose the existing domain during site creation).
2. Select the domain you already own and complete the connection flow. Use the exact purchased domain; this repository does not assume a domain name.
3. If the domain is in the same Hostinger account and uses Hostinger nameservers, the connection normally does not require manual DNS edits.
4. If hPanel shows a connection error, use its **Check guide** and apply the exact nameservers or hosting-IP records it supplies. Do not guess an IP, and preserve existing email MX/TXT records.
5. Allow up to 24 hours for DNS propagation. Confirm SSL is active in the site's dashboard and test `https://your-domain` and the `www` variant. Follow Hostinger's assigned domain/redirect settings.
6. Repeat the route-refresh and mobile checks on the real domain.

Sources: [Connect a custom domain](https://www.hostinger.com/support/how-to-connect-a-custom-domain-to-a-node-js-application/), [Point a domain to Hostinger](https://www.hostinger.com/support/1863967-how-to-point-a-domain-to-hostinger/), [Automatic SSL](https://www.hostinger.com/support/1575761-how-to-claim-a-free-ssl-that-comes-with-a-hostinger-hosting-plan/).

## Do not use the ordinary Git tool with the source branch

**Dashboard → Advanced → Git** is a different deployment tool: it deploys committed files as-is and does not build this Vite source. Connecting `main` there is insufficient because `dist/` is deliberately ignored. Select the built `hostinger` branch described above, or use the upload ZIP.

Source: [Hostinger Git tool](https://docs.hostinger.com/websites/git).

## What publishing enables

All marketing pages, animations, the intro and the synthetic product demo can run as static files. Forms currently validate locally and show **NOT SENT**; sign-in is a concept preview. Hosting does not add email delivery, authentication, production integrations or analytics. Those require separate implementation. All synthetic labels and price-hypothesis disclosures must remain visible.

Prepared 23 October 2026 from Hostinger's official documentation. Menu wording can vary by plan and account.
