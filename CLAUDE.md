# Project Notes

## Vercel Deployment

- This is a Next.js 14 project deployed on Vercel (Hobby plan, user: hlaramelo-3349)
- Deploy hook URL: `https://api.vercel.com/v1/integrations/deploy/prj_NcRvUggqoFK8znKMaKkGVYvtJK9U/sE7ED5CXu4`
- Branch `claude/reach-capital-website-bupHl` deploys as Preview environment

### Key Lesson: Vercel 404 Fix

If Vercel builds succeed but the site returns **404 (Middleware: 404 Not Found)**, the root cause is that Vercel's Framework Preset is not correctly set to Next.js. The fix is to add a `vercel.json` at the project root with:

```json
{
  "framework": "nextjs"
}
```

This forces Vercel to use the `@vercel/next` builder and runtime, which knows how to route requests to `.next/` output. Without this, Vercel runs `next build` successfully but doesn't know how to serve the output.

**Do NOT use `output: "export"` in next.config.mjs** — Vercel runs Next.js natively and handles `.next/` output directly. Static export is unnecessary and can cause issues.

## Tech Stack

- Next.js 14.2.35 (App Router, `src/app/`)
- React 18
- TypeScript
- Tailwind CSS
- Recharts (for data visualization)
- No `next/image` usage, no API routes — fully static pages
