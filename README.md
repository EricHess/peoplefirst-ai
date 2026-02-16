# PeopleFirst AI — website launch draft (v0.1)

This is the first working website draft for your small-business positioning:
**People-first AI that augments teams rather than replaces them.**

## What's included

- Core landing page with: Hero, Problem, Outcomes, How It Works, Modules, Pricing, FAQ, Contact
- Messaging aligned to the "employees are family" positioning
- Mock module stack (as PRD source blocks)
- Lead capture form (currently client-side placeholder)
- Accessibility-first shell: semantic sections, labels, visible focus indicators, skip link
- Lightweight mobile behavior

## Files

- `index.html` — full page layout and content
- `styles.css` — design system + responsive style
- `script.js` — mobile nav + form + chat placeholder behavior

## Next iteration priorities

1. Replace placeholder submit logic with actual lead endpoint (Sanity/Resend or Airtable)
2. Add real testimonials/case stories once pilots exist
3. Add true chatbot widget and event instrumentation (lead form and CTA clicks)
4. Add CMS-driven content for fast edits
5. Hook up GA4 / PostHog + conversion events

## Run locally

Open `index.html` directly in a browser or serve it:

```bash
cd /Users/cbcooper/.openclaw/workspace/websites/peoplefirst-ai
python3 -m http.server 4173
```

Then visit: `http://localhost:4173`

## Stack plan alignment

You specified Next.js + Sanity + Vercel as direction. This draft is intentionally static to move fast for review; next pass will port to the preferred stack.
