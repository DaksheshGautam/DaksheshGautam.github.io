# Update your portfolio

Edit these files in GitHub, then commit to main. GitHub Actions checks and publishes the site automatically, usually within a minute. No page redesign or coding is needed.

- content/projects.json — projects, in display order
- content/certifications.json — earned certificates and their completed courses

Use the pencil button on GitHub to edit a file. Copy an existing object, change its fields, and put a comma between objects. JSON requires double quotes, no comments, and no trailing comma. A JSON syntax error stops publication; the existing live website stays available. Check the Actions tab after committing.

## Projects

Only title and track are required. track is "analytics" or "science". Add this object inside the file's outer square brackets, with a comma separating it from other projects:

```json
{
  "title": "My new project",
  "track": "science",
  "category": "MACHINE LEARNING",
  "description": "What I built and what it does.",
  "skills": ["Python", "Pandas"],
  "live": "https://example.com/my-app",
  "repo": "https://github.com/my-account/my-project",
  "image": "projects/my-project.jpg",
  "imageAlt": "My project dashboard",
  "note": "Optional extra context."
}
```

The title and image open live when supplied, otherwise repo. Separate buttons display for each available link. To list a project in both tracks, copy its object and change track in the second copy.

## Certifications and courses

Only title and track are required for the parent. Only title is required for a course. List earned credentials and completed courses only. Add this object inside certifications.json:

```json
{
  "title": "My professional certificate",
  "track": "analytics",
  "issuer": "Certificate provider",
  "date": "2026-10-12",
  "skills": ["SQL", "Data visualization"],
  "verify": "https://example.com/verify/my-credential",
  "image": "certificates/my-certificate.jpg",
  "pdf": "certificates/my-certificate.pdf",
  "courses": [
    {
      "title": "Completed course name",
      "date": "2026-10-12",
      "verify": "https://example.com/verify/my-course",
      "image": "certificates/my-course.png",
      "pdf": "certificates/my-course.pdf"
    }
  ]
}
```

Omit courses or use [] for a standalone certificate. Shared courses can be copied into both certifications, referring to the same files. Dates use YYYY-MM-DD. Existing IBM records use id to find certificates/ID.jpg and certificates/ID.pdf automatically; new credentials can use explicit image and pdf paths instead.

## Optional fields and assets

Omit any optional field, use null, or an empty string. Omit skills or use []. Missing dates, verification links, image previews, PDFs, and course dropdowns are hidden. Missing title or invalid track causes an entry to be skipped. Only valid http/https links display.

Upload downloaded certificate PDFs and image previews to public/certificates/ in GitHub (Add file > Upload files). Upload project images to public/projects/. Use paths relative to public, such as certificates/my-course.png. Supported image types: JPG, JPEG, PNG, WebP, GIF, SVG, AVIF. PDFs must end in .pdf. Files must exist at build time; unavailable files hide their controls. External image/PDF addresses are not used, which prevents broken preview controls. Do not paste your computer's C: path into these files.

Use original downloaded certificates, not screenshots. Project interface screenshots can be used for project cards.

## Smallest valid examples

Project: {"title":"My project","track":"science"}

Certificate: {"title":"My earned certificate","track":"analytics"}

Both work without descriptions, skills, courses, or links. Add fields later whenever they become available.
