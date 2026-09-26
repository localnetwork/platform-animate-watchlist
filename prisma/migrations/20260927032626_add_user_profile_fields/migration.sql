-- AlterTable
ALTER TABLE "users" ADD COLUMN     "username" TEXT,
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "avatarUrl" TEXT,
ADD COLUMN     "socialLinks" JSONB;

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
