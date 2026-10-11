# Dakshesh Gautam — Data Portfolio

Responsive Astro + Tailwind static portfolio with separate Data Analytics and Data Science routes. Prepared for GitHub Pages at https://daksheshgautam.github.io/.

## Develop

Requires Node.js 22.12+ (or a supported newer version).

```sh
npm ci
npm run dev
npm run check
npm run build
npm test
```

## Update content

- `src/data/profile.ts`: portrait, contact links, academic education, and separate resume paths. Place PDFs in `public/resumes/` and set each track's path, for example `resumes/data-analyst.pdf`. Resumes are links only; they are never embedded. Null values hide the controls.
- `src/data/projects.ts`: append a project record with its track, description, skills, and optional live/repository links. Project titles and visuals open the live project when available, otherwise the repository. Independent buttons allow visitors to choose either.
- `src/data/certificates.ts`: append a professional certificate and its individually verified courses. Only earned, individually verified course credentials belong here. Shared records can appear in both tracks. Add downloaded PDFs and previews in `public/certificates/` named with the credential ID; controls appear only when files exist.
- Each academic education record accepts degree, institution, period, description, and highlights; the layout expands automatically.

## Certificates

Two professional certificates and 18 unique constituent course certificates were checked in the authenticated Coursera account on 11 October 2026. The analyst credential contains 11 courses and science contains 12; five overlap. Original PDF files were downloaded from the PDF URLs exposed in Coursera's certificate viewer. JPG previews were rendered from the downloaded PDFs with Poppler, not captured from the browser. Preserve the original PDFs. Completion dates in the account can differ by one day from printed PDF dates; printed dates are preferred in the course data.

Project descriptions and links come from the user's public repository READMEs. Live services may sleep or change availability. No academic qualifications or resume contents have been invented. Academic education remains pending until supplied.

## GitHub Pages

The included workflow installs from the lockfile, runs Astro validation, builds, verifies internal links and assets, and deploys the static artifact. Set repository **Settings → Pages → Source → GitHub Actions**. Pushes to `main` deploy automatically.

`SITE_URL` and `BASE_PATH` come from the Pages configuration action. Local defaults serve at `/`. For a project repository, test with `SITE_URL=https://example.github.io BASE_PATH=/repository-name`; all local navigation, PDFs, portrait, and previews respect the base path.

## Accessibility

Responsive layouts, visible keyboard focus, skip link, native course disclosures, labelled preview dialog, Escape/backdrop dismissal, focus return via native dialog, reduced-motion support, and descriptive links. No contact form or account is required.

Third-party certificate branding and the personal photo retain their original ownership.
