-- CreateTable
CREATE TABLE "user_anime_statuses" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "animeEntryId" TEXT NOT NULL,
    "status" "WatchStatus" NOT NULL DEFAULT 'PLANNED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_anime_statuses_pkey" PRIMARY KEY ("id")
);

-- Backfill existing per-entry status into the new per-user status table,
-- attributing the current status to the entry's owning user.
INSERT INTO "user_anime_statuses" ("id", "userId", "animeEntryId", "status", "createdAt", "updatedAt")
SELECT gen_random_uuid(), "userId", "id", "status", "createdAt", "updatedAt"
FROM "anime_entries"
WHERE "status" IS NOT NULL;

-- DropIndex
DROP INDEX "anime_entries_status_idx";

-- AlterTable
ALTER TABLE "anime_entries" DROP COLUMN "status";

-- CreateIndex
CREATE INDEX "user_anime_statuses_animeEntryId_idx" ON "user_anime_statuses"("animeEntryId");

-- CreateIndex
CREATE INDEX "user_anime_statuses_status_idx" ON "user_anime_statuses"("status");

-- CreateIndex
CREATE UNIQUE INDEX "user_anime_statuses_userId_animeEntryId_key" ON "user_anime_statuses"("userId", "animeEntryId");

-- AddForeignKey
ALTER TABLE "user_anime_statuses" ADD CONSTRAINT "user_anime_statuses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_anime_statuses" ADD CONSTRAINT "user_anime_statuses_animeEntryId_fkey" FOREIGN KEY ("animeEntryId") REFERENCES "anime_entries"("id") ON DELETE CASCADE ON UPDATE CASCADE;
