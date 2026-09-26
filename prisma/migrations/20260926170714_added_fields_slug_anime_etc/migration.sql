/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `anime_entries` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `anime_entries` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AnimeAiredStatus" AS ENUM ('NOT_YET_RELEASED', 'AIRING', 'FINISHED', 'HIATUS', 'CANCELLED');

-- AlterTable
ALTER TABLE "anime_entries" ADD COLUMN     "airedFrom" TIMESTAMP(3),
ADD COLUMN     "airedStatus" "AnimeAiredStatus" NOT NULL DEFAULT 'NOT_YET_RELEASED',
ADD COLUMN     "airedTo" TIMESTAMP(3),
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "viewCount" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "anime_entries_slug_key" ON "anime_entries"("slug");

-- CreateIndex
CREATE INDEX "anime_entries_airedStatus_idx" ON "anime_entries"("airedStatus");

-- CreateIndex
CREATE INDEX "anime_entries_viewCount_idx" ON "anime_entries"("viewCount");
