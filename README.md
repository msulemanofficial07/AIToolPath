# AIToolPath

A lightweight static editorial site centered on five personal AI-tool reviews, a focused tool directory, and practical guides. It needs no build step, database, API key, or paid service; two-tool comparison runs in the browser.

## Run locally

Open `index.html`, `top-ai-tools.html`, or `compare.html` in a current browser. The homepage features the author's five personal reviews and a focused five-tool directory with search and category filters; the separate Top 15 guide covers a broader range of everyday work. Two-tool comparison works in the browser. A local static web server can also serve the files for testing.

The review pages describe the author's stated experience as a freelancer and student; they are qualitative, not controlled benchmark results. Model names, pricing, features, availability, and terms change and must be checked against linked official sources.

## Edit the content

- Edit the `tools` array in `index.html` to change names, descriptions, categories, use-case keywords, audiences, and limitation notes.
- Edit `top-ai-tools.html` to update the 15-tool editorial roundup, table of contents, and official provider links.
- Edit `compare.js` to add comparison candidates or update task-fit guidance and official provider links.
- Keep each tool's `id` stable and unique. Add its provider homepage to the `officialSites` map; these links are direct links, not affiliate links.
- Edit the `categories` array to add a category. Directory filters and category buttons are generated from it.
- Edit the `expertise` field on each tool to explain its strongest practical use; this text appears on tool cards, profiles, and comparisons.

## Brand and layout

The CSS variables near the top of the `<style>` block control the palette, content width, and type families. The wordmark is drawn with CSS in `.brand-mark`; no third-party logo is used. The page has responsive mobile navigation and honors reduced-motion preferences.

## Search and SEO

The directory search is client-side and keyword/use-case based. The individual review and guide pages have unique titles, descriptions, canonical/social metadata, article structured data, contextual internal links, and reserved ad placements. `sitemap.xml` and `robots.txt` use the GitHub Pages project URL documented below; update both, all canonical URLs, and Open Graph URLs if the production domain or repository path changes. Keep sitemap entries limited to live public pages. Organic search visibility and traffic are not guaranteed by page count or metadata alone; publish original, maintained content and validate the domain in Search Console.

`robots.txt` currently permits crawling and lists the project sitemap URL. Confirm that sitemap URL matches the final public domain and repository path before submitting it to search engines. Do not submit placeholder or private URLs.

## Monetization and trust

No ad network, affiliate tracking, sponsored placement, or newsletter sign-up is active. The homepage and editorial pages contain visibly identified reserved ad locations; these are placeholders, not live ads. Add provider-issued ad code or approved affiliate links only after the relevant account/program is active, label commercial relationships clearly, and keep editorial comparisons independent. Advertising and affiliate revenue are not guaranteed.

## Deploy

This is static HTML and can be deployed to GitHub Pages, Netlify, Cloudflare Pages, or another static host. `index.html` must be at the published site's root so the root URL has a default page.

The canonical URLs and sitemap currently target the GitHub Pages project URL `https://msulemanofficial07.github.io/AIToolPath/`. For that deployment, publish the contents of this folder at the root of a repository named `AIToolPath` and configure a GitHub Pages deployment source in **Settings → Pages**. No deployment workflow is included in this folder; configure the deployment workflow or another supported publishing source for the repository. A repository named `msulemanofficial07.github.io` instead publishes at the account-root URL, so update the canonical, Open Graph, sitemap, and robots URLs if you choose it.

After publishing, verify the deployment succeeds and open the published URL. For another domain, connect it in the host's settings, enable HTTPS, then update canonical metadata and sitemap references to the real domain. Verify mobile layouts and every outbound link after publishing.

## Future integrations

- Analytics: add a consent-aware analytics provider and record events such as search, advisor submission, comparison, and outbound provider click. No tracking ID is included.
- Database: move the catalog to a content store or database and expose it through a server-side API. Preserve structured fields and verification dates.
- Real AI Advisor: send user requirements from the frontend to a secure backend. The backend should match against verified catalog records and explain the ranking. Never place provider API secrets in browser code.
- Accounts and saved tools: add only with a backend, authentication, and an appropriate privacy policy.

The contact address and legal links in this prototype are placeholders. Replace them, publish reviewed legal and editorial pages, and set up a real contact channel before launch.