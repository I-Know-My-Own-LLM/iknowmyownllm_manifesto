# SEO Operations

Repository changes prepare the site for crawling, measurement, and social sharing. The following owner-level tasks must be completed in the hosting and analytics accounts.

## Production launch checklist

1. In Firebase Hosting, connect both `iknowmyllm.com` and `www.iknowmyllm.com` to project `iknowmyllm`.
2. Apply the DNS records supplied by Firebase and wait for its TLS certificate to become active.
3. Select `iknowmyllm.com` as the canonical host and configure `www.iknowmyllm.com` to redirect permanently to it.
4. Confirm all canonical routes, `/robots.txt`, `/sitemap.xml`, and `/social-banner.jpg` return HTTP 200 over HTTPS.
5. Keep GitHub Pages for preview only. Do not attach the production custom domain to both hosting providers.

## Search engines

1. Add a Domain property for `iknowmyllm.com` in Google Search Console and verify it by DNS.
2. Submit `https://iknowmyllm.com/sitemap.xml` and inspect the homepage plus one guide URL.
3. Add the site to Bing Webmaster Tools and submit the same sitemap.
4. Review indexing weekly during the first month for blocked pages, soft 404s, duplicate canonicals, and crawl failures.

## Analytics and conversions

GA4 measurement ID `G-QJV29REJZC` is enabled by default and can be overridden with `NUXT_PUBLIC_GA_ID`. The site sends `sign_issue_click`, `share_click`, `copy_link`, `resource_click`, `guide_download`, and `outbound_github` events.

In GA4, mark `sign_issue_click` as a key event. Link the GA4 property to Search Console under **Admin → Product links → Search Console Links**. Confirm each event in DebugView after deployment and exclude internal traffic if appropriate.

## Monthly reporting

Record organic impressions, clicks, CTR, position, indexed URLs, organic sessions, manifesto-signing clicks, conversion rate, downloads, shares, and resource clicks by landing page. Compare month over month and against the previous 28 days.

Only revise snippets for pages with enough impressions to evaluate. Record the change date and wait 28 days before judging the result unless there is a technical error.
