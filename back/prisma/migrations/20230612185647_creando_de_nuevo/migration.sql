/*
  Warnings:

  - You are about to drop the `Mods` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Mods" DROP CONSTRAINT "Mods_userId_fkey";

-- DropTable
DROP TABLE "Mods";

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "icon_profile" TEXT DEFAULT 'default_icon_user',
    "country" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mods" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "version" TEXT NOT NULL DEFAULT '1.0.0',
    "image_high" TEXT NOT NULL,
    "image_low" TEXT NOT NULL,
    "preview_video" TEXT,
    "link_mod" TEXT NOT NULL,
    "downloads_count" INTEGER NOT NULL,
    "stars_count" INTEGER NOT NULL,
    "compatibility" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "mods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "mods_link_mod_key" ON "mods"("link_mod");

-- AddForeignKey
ALTER TABLE "mods" ADD CONSTRAINT "mods_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
