# AIToolPath

A lightweight, single-file prototype for discovering and comparing AI tools. It runs without a build step, database, API key, or paid service.

## Run locally

Open `index.html` in a current browser. Search, category filters, profile filters, tool detail dialogs, two-tool comparison, and the rule-based advisor work entirely in the browser. A local static web server can also serve the file for testing.

The tool catalog is demonstration content. Pricing, feature availability, platforms, official links, and editorial claims must be checked before publishing. The advisor is not an AI service and does not verify provider data.

## Edit the content

- Edit the `tools` array in `index.html` to change names, descriptions, categories, use-case keywords, audiences, and limitation notes.
- Keep each tool's `id` stable and unique. Add its provider homepage to the `officialSites` map; these links are direct links, not affiliate links.
- Edit the `categories` array to add a category. Directory filters and category buttons are generated from it.
- Edit the `profiles` array to change role-based discovery.
- Update the advisor's task matching only when the corresponding catalog data is maintained. Do not treat unverified pricing or requirements as confirmed matches.

## Brand and layout

The CSS variables near the top of the `<style>` block control the palette, content width, and type families. The wordmark is drawn with CSS in `.brand-mark`; no third-party logo is used. The page has responsive mobile navigation and honors reduced-motion preferences.

## Search and SEO

The current search is client-side and keyword/use-case based. It is appropriate for a small demo catalog, not a replacement for indexed database search at scale. Before production, choose a canonical domain, set the canonical and social metadata, create a sitemap containing only live public URLs, and replace the demo's generic page metadata with route-specific titles and descriptions. Tool dialogs are not individual indexable tool pages; production SEO pages need real routes and unique, verified content.

`robots.txt` currently permits crawling. Add its sitemap URL after deploying to the final domain. Do not submit placeholder or private URLs to search engines.

## Monetization and trust

No ads, affiliate tracking, sponsored placements, or newsletter sign-up are active. The directory includes one visibly identified reserved ad location. Add commercial links only after joining a program, label commission-earning links and sponsorship clearly, and keep editorial comparisons independent. Advertising and affiliate revenue are not guaranteed.

## Deploy

This is static HTML and can be deployed to GitHub Pages, Netlify, Cloudflare Pages, or another static host. `index.html` must be at the published site's root so the root URL has a default page.

To publish at `https://msulemanofficial07.github.io/`, create a public GitHub repository named `msulemanofficial07.github.io` (or rename the current `AIToolPath` repository), then put this folder's files at the repository root and push them to `main`. This project includes a GitHub Actions workflow that deploys `index.html` and `robots.txt` on each push. In the repository's **Settings → Pages**, set the build and deployment source to **GitHub Actions**. A repository named `AIToolPath` instead publishes as a project site at `https://msulemanofficial07.github.io/AIToolPath/`; it cannot serve the account-root URL.

After publishing, verify the Actions deployment succeeds and open the published URL. For another domain, connect it in the host's settings, enable HTTPS, then update canonical metadata and sitemap references to the real domain. Verify mobile layouts and every outbound link after publishing.

## Future integrations

- Analytics: add a consent-aware analytics provider and record events such as search, advisor submission, comparison, and outbound provider click. No tracking ID is included.
- Database: move the catalog to a content store or database and expose it through a server-side API. Preserve structured fields and verification dates.
- Real AI Advisor: send user requirements from the frontend to a secure backend. The backend should match against verified catalog records and explain the ranking. Never place provider API secrets in browser code.
- Accounts and saved tools: add only with a backend, authentication, and an appropriate privacy policy.

The contact address and legal links in this prototype are placeholders. Replace them, publish reviewed legal and editorial pages, and set up a real contact channel before launch.