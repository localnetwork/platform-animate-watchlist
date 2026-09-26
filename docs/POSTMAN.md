# Postman Documentation

This project includes ready-to-import Postman files:

- `docs/postman/Anime-Watchlist-API.postman_collection.json`
- `docs/postman/Anime-Watchlist.local.postman_environment.json`

## 1) Import

1. Open Postman.
2. Click **Import**.
3. Import both files above (collection + environment).
4. Select environment **Anime Watchlist - Local**.

## 2) Configure environment values

- `baseUrl`: default is `http://localhost:3001`
- `token`: leave empty (auto-filled after login requests)
- `animeId`, `episodeId`, `authorId`, `genreId`, `typeId`: leave empty initially (set from response IDs as you test)

## 3) Seeded credentials

After running:

```bash
npm run prisma:seed
```

you can use:

- **Admin**
  - email: `demo1@anime.local`
  - password: `password123`
- **Member**
  - email: `demo2@anime.local`
  - password: `password123`

## 4) Public endpoints (no login required)

These do **not** require an Authorization header:

- `Public > List Genres` — `GET /api/genres`
- `Public > List Types` — `GET /api/types`
- `Public > Anime Catalog - Top Viewed` — `GET /api/animes?sort=top`
- `Public > Anime Catalog - Most Rated` — `GET /api/animes?sort=rated`
- `Public > Anime Catalog - Recently Added` — `GET /api/animes?sort=recent`
- `Public > Anime Catalog - Filter by Genre & Type` — `GET /api/animes?genreId=&typeId=`
- `Public > Anime Catalog - Search` — `GET /api/animes?search=`
- `Public > Anime Catalog - Select Includes` — `GET /api/animes?includes=genres,type`

`GET /api/animes` supports combining `sort`, `genreId` (comma-separated for multiple), `typeId`, `search`, `page`, `limit`, and `includes` in a single request. It aggregates entries across all users and returns `averageRating`/`ratingCount` instead of a personal rating.

`includes` accepts a comma-separated subset of `episodes`, `genres`, `authors`, `type` to shape the response (e.g. `includes=genres,type`); omit it to include all four relations. An unrecognized value in `includes` (with no valid values) returns **400 Bad Request**.

## 5) Recommended test flow

1. `Health > GET /api/health`
2. `Public > List Genres` / `Public > List Types` (copy an `id` into `genreId` / `typeId`)
3. `Auth > Login (Admin)` (auto-saves bearer token)
4. `Auth > Update Profile` (optional)
5. `Authors > Create Author` (copy `id` to environment `authorId`)
6. `Watchlist > Create Anime` (copy `id` to `animeId`)
7. `Watchlist > Add Episode` (copy `id` to `episodeId`)
8. `Watchlist > Set Own Rating`
9. `Watchlist > Attach Author`
10. `Watchlist > List` / `Get One`
11. `Watchlist > Update Anime`
12. `Watchlist > Delete Anime` (admin allowed)

For RBAC check:
- Login as **Member** and run `Watchlist > Delete Anime` → should return **403 Forbidden**.

## 6) Notes

- Public routes (`/api/genres`, `/api/types`, `/api/animes`) require no Authorization header at all.

- All protected routes use `Authorization: Bearer {{token}}`.
- Login requests include a Postman test script to automatically store `token`.
- `coverImageUrl` must be a valid URL and should match `R2_PUBLIC_BASE_URL` prefix when that env var is configured in backend.
