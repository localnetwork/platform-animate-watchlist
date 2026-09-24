-- CreateEnum
CREATE TYPE "WatchStatus" AS ENUM ('PLANNED', 'WATCHING', 'COMPLETED', 'DROPPED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anime_entries" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coverImageUrl" TEXT NOT NULL,
    "status" "WatchStatus" NOT NULL DEFAULT 'PLANNED',
    "notes" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "anime_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anime_ratings" (
    "id" TEXT NOT NULL,
    "animeEntryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "anime_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anime_episodes" (
    "id" TEXT NOT NULL,
    "animeEntryId" TEXT NOT NULL,
    "episodeNumber" INTEGER NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "durationMinutes" INTEGER,
    "airDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "anime_episodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anime_authors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "anime_authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anime_entry_authors" (
    "animeEntryId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "role" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anime_entry_authors_pkey" PRIMARY KEY ("animeEntryId","authorId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "anime_entries_userId_idx" ON "anime_entries"("userId");

-- CreateIndex
CREATE INDEX "anime_entries_status_idx" ON "anime_entries"("status");

-- CreateIndex
CREATE INDEX "anime_ratings_userId_idx" ON "anime_ratings"("userId");

-- CreateIndex
CREATE INDEX "anime_ratings_animeEntryId_idx" ON "anime_ratings"("animeEntryId");

-- CreateIndex
CREATE UNIQUE INDEX "anime_ratings_animeEntryId_userId_key" ON "anime_ratings"("animeEntryId", "userId");

-- CreateIndex
CREATE INDEX "anime_episodes_animeEntryId_idx" ON "anime_episodes"("animeEntryId");

-- CreateIndex
CREATE UNIQUE INDEX "anime_episodes_animeEntryId_episodeNumber_key" ON "anime_episodes"("animeEntryId", "episodeNumber");

-- CreateIndex
CREATE INDEX "anime_authors_userId_idx" ON "anime_authors"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "anime_authors_userId_name_key" ON "anime_authors"("userId", "name");

-- CreateIndex
CREATE INDEX "anime_entry_authors_authorId_idx" ON "anime_entry_authors"("authorId");

-- AddForeignKey
ALTER TABLE "anime_entries" ADD CONSTRAINT "anime_entries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anime_ratings" ADD CONSTRAINT "anime_ratings_animeEntryId_fkey" FOREIGN KEY ("animeEntryId") REFERENCES "anime_entries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anime_ratings" ADD CONSTRAINT "anime_ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anime_episodes" ADD CONSTRAINT "anime_episodes_animeEntryId_fkey" FOREIGN KEY ("animeEntryId") REFERENCES "anime_entries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anime_authors" ADD CONSTRAINT "anime_authors_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anime_entry_authors" ADD CONSTRAINT "anime_entry_authors_animeEntryId_fkey" FOREIGN KEY ("animeEntryId") REFERENCES "anime_entries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anime_entry_authors" ADD CONSTRAINT "anime_entry_authors_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "anime_authors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
