# Anime Watchlist Backend

Express + PostgreSQL backend using Prisma ORM.

## Architecture

The codebase now follows a layered pattern:

- `src/models`: domain validation + response shaping
- `src/repositories`: Prisma data-access queries
- `src/services`: business logic and orchestration
- `src/controllers`: HTTP-only request/response handlers
- `src/routes`: route definitions

## API Testing (Postman)

See `docs/POSTMAN.md` for Postman setup and workflow.

## Setup

1. Copy environment file:
   ```bash
   cp .env.example .env
   ```
2. Set `DATABASE_URL` in `.env` to your PostgreSQL credentials.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run Prisma migration:
   ```bash
   npm run prisma:migrate -- --name init
   ```
5. Generate Prisma client:
   ```bash
   npm run prisma:generate
   ```
6. Start server:
   ```bash
   npm run dev
   ```

## Seeding

Run the seed script:

```bash
npm run prisma:seed
```

or with Prisma:

```bash
npx prisma db seed
```

Seeder modules are organized under `prisma/seeders`:
- `authSeeder.js`
- `roleSeeder.js`
- `cleanupSeeder.js`
- `authorSeeder.js`
- `animeSeeder.js`

Default seeded role assignment:
- `demo1@anime.local` → `admin`
- `demo2@anime.local` → `member`

Seeded volume:
- `demo1@anime.local` receives **500 authors** and **500 anime entries** (auto-filled fields)
- `demo2@anime.local` receives a minimal sample dataset for member-role testing

Seeder behavior:
- Authors are sourced from AniList staff and created **without duplicates** per user.
- Anime cover images are downloaded from AniList and uploaded to **Cloudflare R2**.

## Data Model

- `AnimeEntry`: title, description, `coverImageUrl` (Cloudflare R2 URL), status, notes
- `AnimeRating`: separate table for ratings (`anime_ratings`) linked to anime entry + user
- `AnimeEpisode`: linked episodes for each anime entry
- `AnimeAuthor`: author metadata
- `AnimeEntryAuthor`: join table between anime entries and authors
- `Role`: RBAC role table (`roles`)
- `Permission`: RBAC permission table (`permissions`)
- `RolePermission`: role-permission join table (`roles_permissions`)
- `UserRole`: user-role join table (`user_roles`)

If `R2_PUBLIC_BASE_URL` is set, `coverImageUrl` must start with that prefix.

## Main API

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `PUT /api/auth/me`
- `GET /api/watchlist`
- `GET /api/watchlist/manage/animes` (filters + pagination)
- `GET /api/watchlist/top-viewed` (top 10 sidebar source)
- `POST /api/watchlist`
- `GET /api/watchlist/:id`
- `PUT /api/watchlist/:id`
- `DELETE /api/watchlist/:id`
- `POST /api/watchlist/:id/view` (increments view counter)
- `GET /api/watchlist/:id/rating`
- `PUT /api/watchlist/:id/rating`
- `DELETE /api/watchlist/:id/rating`
- `POST /api/watchlist/:id/episodes`
- `PUT /api/watchlist/:id/episodes/:episodeId`
- `DELETE /api/watchlist/:id/episodes/:episodeId`
- `POST /api/watchlist/:id/authors/:authorId`
- `DELETE /api/watchlist/:id/authors/:authorId`
- `GET /api/authors`
- `POST /api/authors`
- `PUT /api/authors/:id`
- `DELETE /api/authors/:id`

Manage endpoint query params:
- `page`, `limit`
- `search`
- `status` (`PLANNED|WATCHING|COMPLETED|DROPPED`)
- `airedStatus` (`NOT_YET_RELEASED|AIRING|FINISHED|HIATUS|CANCELLED`)
- `typeId`, `genreId`, `authorId`
- `sortBy` (`updatedAt|createdAt|title|viewCount|airedFrom|airedTo`)
- `sortDir` (`asc|desc`)
