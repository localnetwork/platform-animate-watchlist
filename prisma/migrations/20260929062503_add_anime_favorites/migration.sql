-- CreateTable
CREATE TABLE "anime_favorites" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "animeEntryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anime_favorites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "anime_favorites_animeEntryId_idx" ON "anime_favorites"("animeEntryId");

-- CreateIndex
CREATE UNIQUE INDEX "anime_favorites_userId_animeEntryId_key" ON "anime_favorites"("userId", "animeEntryId");

-- AddForeignKey
ALTER TABLE "anime_favorites" ADD CONSTRAINT "anime_favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anime_favorites" ADD CONSTRAINT "anime_favorites_animeEntryId_fkey" FOREIGN KEY ("animeEntryId") REFERENCES "anime_entries"("id") ON DELETE CASCADE ON UPDATE CASCADE;
