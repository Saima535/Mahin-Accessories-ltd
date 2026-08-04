# Mahin Accessories Ltd

This repository contains a full content-management and public-facing website setup for Mahin Accessories Ltd. It is organized as a two-application Next.js monorepo:

- Admin: a CMS-style control panel for managing website content
- Client: the public website that renders the published content

The system is designed around a simple but extensible pattern: the Admin app stores and edits content in MongoDB, uploads media to Cloudinary, and exposes REST-style API routes; the Client app consumes those APIs and renders the content for visitors.

---

## 1. Project overview

This project is a content-driven web platform with the following responsibilities:

- Manage reusable content sections such as Hero, About, Services, Portfolio, Blog, Policies, Team, Partners, Testimonials, and Instagram content
- Provide a secure-ish admin experience for editing content without touching code
- Serve that content to the public website through API endpoints
- Support image uploads via Cloudinary

The repository is split into two independent Next.js apps so the editing experience and public presentation remain separate.

---

## 2. Architecture

### High-level architecture

The platform follows a very practical layered architecture:

1. Admin app handles CRUD operations
2. MongoDB stores structured content
3. Cloudinary stores and serves images
4. Client app reads the published content from Admin API endpoints
5. The public website renders sections declaratively from the fetched data

### Why this architecture was chosen

- Separation of concerns: the Admin app is focused on content management, while the Client app is focused on presentation
- Low-friction CMS setup: new content types can be added with a model, API routes, and a matching UI component
- Cloud-native media handling: images are hosted and optimized through Cloudinary rather than stored locally
- Easier deployment: each app can be deployed independently if needed

### Core technical stack

- Next.js 16 for both apps
- React 19
- MongoDB + Mongoose for persistence
- Cloudinary for image hosting
- SWR for admin-side data fetching and revalidation
- Tailwind CSS for styling
- TypeScript in both apps for core configuration and typings

---

## 3. Repository structure

```text
.
├── Admin/                 # CMS/admin application
│   ├── app/               # Next.js app router pages and API routes
│   │   ├── admin/         # Admin dashboard pages
│   │   └── api/           # CRUD API routes per content section
│   ├── components/        # UI for each content section
│   │   ├── about/         # About content manager
│   │   ├── album/         # Album/photo manager
│   │   ├── blog/          # Blog manager
│   │   ├── feature/       # Feature manager
│   │   ├── feedback/      # Feedback/testimonial manager
│   │   ├── hero/          # Hero section manager
│   │   ├── instagram/     # Instagram strip manager
│   │   ├── member/        # Team member manager
│   │   ├── partner/       # Partner manager
│   │   ├── policy/        # Policy manager
│   │   ├── portfolio/     # Portfolio manager
│   │   └── service/       # Service manager
│   ├── lib/               # Database, Cloudinary, and shared hooks
│   └── package.json
│
├── Client/                # Public-facing website
│   ├── app/               # Next.js app router pages
│   ├── components/        # Page sections rendered from API data
│   └── package.json
│
├── LICENSE
└── README.md              # This file
```

---

## 4. Applications

### Admin app

The Admin app is the content-management layer. It is responsible for:

- Authenticating the user into the management area
- Displaying section-specific manager screens
- Creating, reading, updating, and deleting records
- Uploading images to Cloudinary
- Calling the internal API routes for persistence

The Admin UI is organized around individual content modules. Each module normally includes:

- a manager component for editing and listing records
- a form component for input fields
- a listing component for displaying existing records
- a route handler in the Admin API layer
- a Mongoose model for persistence

### Client app

The Client app is the public-facing site. It is responsible for:

- fetching data from the Admin API routes
- rendering the published site sections
- presenting the content in a polished visitor experience

The public site is built from reusable section components such as:

- Hero
- About
- Services
- Product Portfolio
- Policies
- Team/Management
- Partners
- Blog
- Testimonials
- Instagram section
- Photo Albums

---

## 5. Content modules

The platform currently supports the following content entities:

- About
- Album / photos
- Blog
- Feature
- Feedback / testimonials
- Hero
- Instagram strip
- Member / team
- Partner
- Policy
- Portfolio
- Service

Each module follows a similar pattern:

- a Mongoose schema/model in Admin/lib/models
- API routes in Admin/app/api/<module>
- UI components in Admin/components/<module>
- corresponding public rendering in Client/components

That consistency is one of the main design strengths of the repository.

---

## 6. Data and media flow

### Content persistence

Content is stored in MongoDB through Mongoose models. The database connection is initialized via Admin/lib/connectToDB.ts.

The workflow is:

1. Admin submits form data
2. API route receives the request
3. The route connects to MongoDB
4. The Mongoose model writes or updates the document
5. The Client reads the updated data from the API endpoint

### Media handling

Images are pushed to Cloudinary through the Admin upload flow. The Cloudinary configuration is centralized in Admin/lib/cloudinary.ts.

This approach avoids storing large media files in the repository or relying on local filesystem storage.

### Data fetching pattern

Admin-side content managers use SWR from Admin/lib/DataFetch/SWRDataFetch.jsx. This provides a unified, lightweight way to fetch, cache, and refresh data after mutations.

The public Client app uses direct fetch calls to the Admin API endpoints.

---

## 7. Environment variables

The apps require environment variables to connect to MongoDB and Cloudinary, and to allow the Client app to reach the Admin API.

### Admin app

Create a .env.local file inside Admin with values like:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/mahin-accessories
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Client app

Create a .env.local file inside Client with:

```env
NEXT_PUBLIC_ADMIN_API=http://localhost:3000
```

### Notes

- The Admin app uses the same API base URL for its own internal calls.
- When running both apps locally, it is typical to run the Admin app on port 3000 and the Client app on port 3001 or another open port.
- In production, set these values to the deployed URL of the Admin app.

---

## 8. Installation and local development

### Prerequisites

- Node.js 20+ recommended
- npm
- A MongoDB instance
- A Cloudinary account

### Install dependencies

From the repository root, install dependencies separately for each app:

```bash
cd Admin
npm install

cd ../Client
npm install
```

### Run the Admin app

```bash
cd Admin
npm run dev
```

Open http://localhost:3000 in your browser.

### Run the Client app

```bash
cd Client
npm run dev
```

If you want to run both apps at once, use a different port for the Client app:

```bash
cd Client
npx next dev -p 3001
```

Then point the Client app to the Admin app through NEXT_PUBLIC_ADMIN_API.

---

## 9. Build and lint checks

Each application supports standard Next.js checks.

### Admin

```bash
cd Admin
npm run lint
npm run build
```

### Client

```bash
cd Client
npm run lint
npm run build
```

These commands help validate that the apps are healthy before deploying changes.

---

## 10. Deployment notes

Both apps are standard Next.js applications and can be deployed to platforms such as Vercel, Render, Railway, or a custom Node-compatible host.

### Deployment recommendations

- Deploy the Admin app as the CMS/API backend
- Deploy the Client app as the public website
- Configure the same environment variables in production for MongoDB and Cloudinary
- Ensure the Client app points to the deployed Admin app via NEXT_PUBLIC_ADMIN_API
- If the Admin app is deployed under a different domain, update NEXT_PUBLIC_API_URL in the Admin app accordingly

### Important production consideration

The current admin authentication flow is a lightweight local-storage based flow used for demo or internal convenience. It is not a full production-grade authentication and authorization system. If this project is intended for real-world multi-user access, the auth layer should be upgraded to a proper provider such as NextAuth or a secure server-side session model.

---

## 11. Design patterns and conventions

The repo uses several recurring patterns that should be preserved when extending it.

### 1. Module-based organization

Each content section uses its own folder under Admin/components and its own API route under Admin/app/api.

### 2. Shared CRUD shape

The CRUD flow is intentionally repetitive and predictable:

- a list view
- a form view
- an API route handling create/update/delete/read
- a persisted Mongoose document

This makes the codebase easy to extend once the pattern is understood.

### 3. Mongoose models as the source of truth

The schema definitions in Admin/lib/models define the shape of the content. New fields should be added there first and then reflected in the form components and API handlers.

### 4. Server routes for persistence

The Admin app relies on Next.js route handlers instead of client-side database calls. That keeps database access centralized and makes the system easier to reason about.

### 5. Reusable image upload flow

The photo upload workflow is centralized and should be reused rather than reimplemented for each module.

### 6. Public site reads from API, not directly from the database

The Client app should remain a consumer of the Admin API; it should not depend on direct database access.

---

## 12. Extending the project

When adding a new section, follow this pattern:

1. Create or update the Mongoose model in Admin/lib/models
2. Add the route handlers in Admin/app/api/<section>
3. Build the Admin manager/form/list UI in Admin/components/<section>
4. Add the public rendering component in Client/components
5. Connect the Client component to the corresponding Admin API endpoint
6. Add the required environment variables if new services are introduced

This keeps the codebase consistent and minimizes duplicated logic.

---

## 13. Current state and notes

The repository is already structured as a working content management system skeleton with a strong module pattern. The main areas that are likely to evolve are:

- authentication and authorization hardening
- richer validation and error handling
- improved content publishing workflows
- more robust admin UX and role-based access
- deployment automation and CI/CD

The existing implementation is well suited for a small to medium-sized content-driven business website with a lightweight CMS layer.

---

## 14. Summary

In short, this monorepo provides:

- a CMS-style Admin experience
- a public website frontend
- MongoDB-backed content storage
- Cloudinary-backed media uploads
- a modular structure for expanding content types over time

It is a practical and maintainable foundation for managing an e-commerce or service-oriented brand website with editorial content.
