# Jisu Kumar Portfolio

Production-ready Next.js 14 portfolio migrated from vanilla HTML/CSS/JS.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 App Router |
| Language | JavaScript + JSX |
| Styling | Tailwind CSS + custom CSS |
| CMS | Sanity (projects + WinBook) |
| Database | PlanetScale MySQL (contact form) |

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token
DATABASE_URL=mysql://user:password@host/database?ssl={"rejectUnauthorized":true}
```

### 3. Create PlanetScale table

Run the migration SQL in your PlanetScale console:
```
lib/migrations/001_contact_messages.sql
```

### 4. Run development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 5. Build for production
```bash
npm run build
npm start
```

## Routes

| Route | Description |
|---|---|
| `/` | Home — hero with 3D cube |
| `/about` | About Jisu Kumar |
| `/projects` | Projects from Sanity |
| `/winbook` | Blog post listing from Sanity |
| `/winbook/[slug]` | Individual blog post |
| `/contact` | Contact form → PlanetScale |
| `/api/contact` | POST endpoint for contact form |

## Sanity CMS

Go to [sanity.io/manage](https://sanity.io/manage) to create a project, then:

1. Add your project ID to `.env.local`
2. Create documents of type `project` and `winbook`
3. The portfolio will fetch and display them automatically

## Project Card Fields (Sanity)

- `title`, `slug`, `description`
- `image` — Sanity image asset
- `technologies` — array of strings
- `status` — "Live" or "In Dev"
- `stars` — integer
- `githubUrl`, `liveUrl`
- `accentColor` — hex string e.g. `#3b82f6`
- `featured`, `order`

## WinBook Post Fields (Sanity)

- `title`, `slug`, `excerpt`
- `coverImage` — Sanity image
- `content` — Portable Text
- `publishedAt` — datetime
- `tags` — array of strings
