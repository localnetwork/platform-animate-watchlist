-- AlterTable
ALTER TABLE "anime_entries" ADD COLUMN     "typeId" TEXT;

-- CreateTable
CREATE TABLE "genres" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anime_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "anime_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anime_entry_genres" (
    "animeEntryId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anime_entry_genres_pkey" PRIMARY KEY ("animeEntryId","genreId")
);

-- CreateIndex
CREATE UNIQUE INDEX "genres_name_key" ON "genres"("name");

-- CreateIndex
CREATE UNIQUE INDEX "anime_types_name_key" ON "anime_types"("name");

-- CreateIndex
CREATE INDEX "anime_entry_genres_genreId_idx" ON "anime_entry_genres"("genreId");

-- CreateIndex
CREATE INDEX "anime_entries_typeId_idx" ON "anime_entries"("typeId");

-- AddForeignKey
ALTER TABLE "anime_entries" ADD CONSTRAINT "anime_entries_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "anime_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anime_entry_genres" ADD CONSTRAINT "anime_entry_genres_animeEntryId_fkey" FOREIGN KEY ("animeEntryId") REFERENCES "anime_entries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anime_entry_genres" ADD CONSTRAINT "anime_entry_genres_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;
