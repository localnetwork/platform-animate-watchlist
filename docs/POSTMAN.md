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
- `animeId`, `episodeId`, `authorId`: leave empty initially (set from response IDs as you test)

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

## 4) Recommended test flow

1. `Health > GET /api/health`
2. `Auth > Login (Admin)` (auto-saves bearer token)
3. `Auth > Update Profile` (optional)
3. `Authors > Create Author` (copy `id` to environment `authorId`)
4. `Watchlist > Create Anime` (copy `id` to `animeId`)
5. `Watchlist > Add Episode` (copy `id` to `episodeId`)
6. `Watchlist > Set Own Rating`
6. `Watchlist > Attach Author`
7. `Watchlist > List` / `Get One`
8. `Watchlist > Update Anime`
9. `Watchlist > Delete Anime` (admin allowed)

For RBAC check:
- Login as **Member** and run `Watchlist > Delete Anime` → should return **403 Forbidden**.

## 5) Notes

- All protected routes use `Authorization: Bearer {{token}}`.
- Login requests include a Postman test script to automatically store `token`.
- `coverImageUrl` must be a valid URL and should match `R2_PUBLIC_BASE_URL` prefix when that env var is configured in backend.
